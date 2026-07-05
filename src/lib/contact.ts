type Env = {
  RESEND_API_KEY?: string;
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function handleContactRequest(
  request: Request,
  env: unknown,
  ctx: any
): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        "Allow": "POST",
      },
    });
  }

  // Same-origin check (anti-CORS bypass / anti-CSRF)
  const url = new URL(request.url);
  const origin = request.headers.get("Origin");
  const referer = request.headers.get("Referer");
  const host = request.headers.get("Host") || url.host;

  if (origin) {
    try {
      const originUrl = new URL(origin);
      if (originUrl.host !== host) {
        return new Response(JSON.stringify({ error: "Cross-origin requests are blocked." }), {
          status: 403,
          headers: { "Content-Type": "application/json" },
        });
      }
    } catch (e) {
      return new Response(JSON.stringify({ error: "Invalid Origin header." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } else if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.host !== host) {
        return new Response(JSON.stringify({ error: "Referer host mismatch." }), {
          status: 403,
          headers: { "Content-Type": "application/json" },
        });
      }
    } catch (e) {
      return new Response(JSON.stringify({ error: "Invalid Referer header." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // Parse JSON
  let body: any;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Ongeldige aanvraag." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Honeypot check
  if (body.website && body.website.trim() !== "") {
    // Silent success for spam bots
    return new Response(JSON.stringify({ success: true, message: "Bedankt voor je bericht." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Extract fields
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const eventDate = typeof body.eventDate === "string" ? body.eventDate.trim() : "";
  const guests = typeof body.guests === "string" ? body.guests.trim() : "";
  const type = typeof body.type === "string" ? body.type.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const location = typeof body.location === "string" ? body.location.trim() : "";

  // Validate required fields
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Naam, e-mailadres en bericht zijn verplicht." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validate lengths
  if (name.length > 100 || email.length > 255 || message.length > 5000) {
    return new Response(JSON.stringify({ error: "Invoer overschrijdt de maximale lengte." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  if (
    phone.length > 30 ||
    company.length > 100 ||
    eventDate.length > 50 ||
    guests.length > 50 ||
    type.length > 100 ||
    service.length > 100 ||
    location.length > 150
  ) {
    return new Response(JSON.stringify({ error: "Invoer overschrijdt de maximale lengte." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validate email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: "Ongeldig e-mailadres." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Rate limiting (IP cooldown) using Cloudflare cache API
  const ip = request.headers.get("CF-Connecting-IP") || "127.0.0.1";
  const cacheKeyUrl = `https://rate-limit.local/ip/${ip}`;
  const cacheKey = new Request(cacheKeyUrl, { method: "GET" });
  let cache: any = null;
  let rateLimitResponse = null;

  try {
    if (typeof caches !== "undefined" && caches.default) {
      cache = caches.default;
      rateLimitResponse = await cache.match(cacheKey);
    }
  } catch (e) {
    console.warn("Cache match failed (normal for local development):", e);
  }

  if (rateLimitResponse) {
    return new Response(
      JSON.stringify({ error: "Te veel aanvragen. Probeer het over een minuut nog eens." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Resend API key validation
  const resendApiKey = (env as Env)?.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY in worker environment bindings.");
    return new Response(
      JSON.stringify({ error: "Er is een serverfout opgetreden. Probeer het later opnieuw." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Prepare emails HTML and Text content
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedPhone = escapeHtml(phone);
  const escapedCompany = escapeHtml(company);
  const escapedEventDate = escapeHtml(eventDate);
  const escapedGuests = escapeHtml(guests);
  const escapedType = escapeHtml(type);
  const escapedService = escapeHtml(service);
  const escapedLocation = escapeHtml(location);
  const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");

  // Email to Wandering Bar info@wanderingbar.nl
  const barHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EADBC8; border-radius: 8px;">
      <h2 style="color: #8C6239; border-bottom: 2px solid #8C6239; padding-bottom: 10px; margin-top: 0;">Nieuwe aanvraag via website</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; width: 35%; color: #333;">Naam:</td>
          <td style="padding: 10px 0; color: #555;">${escapedName}</td>
        </tr>
        ${company ? `
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">Bedrijf:</td>
          <td style="padding: 10px 0; color: #555;">${escapedCompany}</td>
        </tr>` : ""}
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">E-mail:</td>
          <td style="padding: 10px 0; color: #555;"><a href="mailto:${escapedEmail}" style="color: #8C6239; text-decoration: none;">${escapedEmail}</a></td>
        </tr>
        ${phone ? `
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">Telefoon:</td>
          <td style="padding: 10px 0; color: #555;">${escapedPhone}</td>
        </tr>` : ""}
        ${escapedLocation ? `
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">Locatie:</td>
          <td style="padding: 10px 0; color: #555;">${escapedLocation}</td>
        </tr>` : ""}
        ${escapedEventDate ? `
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">Eventdatum:</td>
          <td style="padding: 10px 0; color: #555;">${escapedEventDate}</td>
        </tr>` : ""}
        ${guests ? `
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">Gasten:</td>
          <td style="padding: 10px 0; color: #555;">${escapedGuests}</td>
        </tr>` : ""}
        ${type ? `
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">Type event:</td>
          <td style="padding: 10px 0; color: #555;">${escapedType}</td>
        </tr>` : ""}
        ${service ? `
        <tr style="border-bottom: 1px solid #f2f2f2;">
          <td style="padding: 10px 0; font-weight: bold; color: #333;">Gewenste dienst:</td>
          <td style="padding: 10px 0; color: #555;">${escapedService}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Bericht:</td>
          <td style="padding: 10px 0; color: #555; line-height: 1.5;">${escapedMessage}</td>
        </tr>
      </table>
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #EADBC8; font-size: 12px; color: #999; text-align: center;">
        Verstuurd op: ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}
      </div>
    </div>
  `;

  const barText = `
Nieuwe aanvraag via Wandering Bar

Naam: ${name}
${company ? `Bedrijf: ${company}\n` : ""}E-mail: ${email}
${phone ? `Telefoon: ${phone}\n` : ""}${location ? `Locatie: ${location}\n` : ""}${eventDate ? `Eventdatum: ${eventDate}\n` : ""}${guests ? `Aantal gasten: ${guests}\n` : ""}${type ? `Type event: ${type}\n` : ""}${service ? `Dienst: ${service}\n` : ""}
Bericht:
${message}

Verstuurd op: ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}
  `.trim();

  // Email to Visitor
  const visitorHtml = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F7F4F0; padding: 40px 20px; color: #1C1510;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #EADBC8;">
        <div style="background-color: #1C1510; padding: 30px; text-align: center;">
          <h1 style="color: #F7F4F0; margin: 0; font-family: 'Playfair Display', Georgia, serif; font-size: 24px; font-weight: normal; letter-spacing: 0.1em; text-transform: uppercase;">
            Wandering <span style="font-style: italic; color: #EADBC8;">Bar</span>
          </h1>
        </div>
        <div style="padding: 40px 30px; line-height: 1.6; font-size: 16px;">
          <p style="margin-top: 0; font-weight: bold; font-size: 18px; color: #8C6239;">Beste ${escapedName},</p>
          <p>Bedankt voor je bericht aan Wandering Bar.</p>
          <p>We hebben je aanvraag goed ontvangen en nemen zo snel mogelijk contact met je op.</p>
          
          <div style="margin: 30px 0; padding: 20px; background-color: #F7F4F0; border-radius: 8px; border-left: 4px solid #8C6239;">
            <h4 style="margin-top: 0; margin-bottom: 10px; color: #1C1510; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Samenvatting van je bericht:</h4>
            <p style="margin: 0; font-style: italic; color: #555; font-size: 14px;">"${escapedMessage}"</p>
          </div>

          <p style="margin-bottom: 0;">Met vriendelijke groet,</p>
          <p style="margin-top: 5px; font-weight: bold; color: #8C6239;">Wandering Bar</p>
        </div>
        <div style="background-color: #F7F4F0; padding: 20px 30px; text-align: center; border-top: 1px solid #EADBC8; font-size: 12px; color: #666;">
          <p style="margin: 0 0 5px 0;">Vragen? Mail ons gerust op <a href="mailto:info@wanderingbar.nl" style="color: #8C6239; text-decoration: none; font-weight: bold;">info@wanderingbar.nl</a></p>
          <p style="margin: 0;">Wandering Bar — Cocktailbeleving op locatie</p>
        </div>
      </div>
    </div>
  `;

  const visitorText = `
Bedankt voor je bericht aan Wandering Bar.

We hebben je aanvraag goed ontvangen en nemen zo snel mogelijk contact met je op.

Met vriendelijke groet,

Wandering Bar
info@wanderingbar.nl
  `.trim();

  // Send emails via Resend
  const barMailPayload = {
    from: "Wandering Bar <contact@mail.wanderingbar.nl>",
    to: ["info@wanderingbar.nl"],
    reply_to: email,
    subject: "Nieuwe aanvraag via Wandering Bar",
    html: barHtml,
    text: barText,
  };

  const visitorMailPayload = {
    from: "Wandering Bar <contact@mail.wanderingbar.nl>",
    to: [email],
    reply_to: "info@wanderingbar.nl",
    subject: "We hebben je aanvraag ontvangen – Wandering Bar",
    html: visitorHtml,
    text: visitorText,
  };

  try {
    const [responseBar, responseVisitor] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(barMailPayload),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visitorMailPayload),
      }),
    ]);

    if (!responseBar.ok || !responseVisitor.ok) {
      const errBar = await responseBar.text();
      const errVisitor = await responseVisitor.text();
      console.error("Resend API error:", { errBar, errVisitor });
      return new Response(
        JSON.stringify({ error: "Er is een fout opgetreden bij het verwerken van de aanvraag." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Failed to send emails via Resend:", error);
    return new Response(
      JSON.stringify({ error: "Er is een fout opgetreden bij het verwerken van de aanvraag." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Set rate limit cache key on successful send
  if (cache) {
    try {
      const rateLimitVal = new Response("1", {
        headers: {
          "Cache-Control": "max-age=60",
        },
      });
      if (ctx && typeof ctx.waitUntil === "function") {
        ctx.waitUntil(cache.put(cacheKey, rateLimitVal));
      } else {
        await cache.put(cacheKey, rateLimitVal);
      }
    } catch (e) {
      console.warn("Failed to write to Cloudflare cache:", e);
    }
  }

  return new Response(
    JSON.stringify({ success: true, message: "Bedankt! We hebben je aanvraag ontvangen." }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
