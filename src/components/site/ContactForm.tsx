import { useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PijlRechts } from "./siteIcons";

const schema = z.object({
  name: z.string().trim().min(2, "Vul je naam in").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  eventDate: z.string().trim().max(50).optional().or(z.literal("")),
  guests: z.string().trim().max(20).optional().or(z.literal("")),
  type: z.string().trim().max(50).optional().or(z.literal("")),
  service: z.string().trim().max(50).optional().or(z.literal("")),
  location: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Vertel kort over je event").max(1000),
  website: z.string().optional().or(z.literal("")), // Honeypot field
});

const veldStijl: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "14px",
  border: "1px solid var(--veld-rand, oklch(0.93 0.02 85 / 0.12))",
  background: "var(--veld, oklch(0.14 0.016 50 / 0.6))",
  padding: "16px 18px",
  fontSize: "15px",
  color: "var(--ink, oklch(0.95 0.02 85))",
  fontFamily: "inherit",
  transition: "all 0.2s",
};

const keuzeStijl: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "14px",
  border: "1px solid var(--veld-rand, oklch(0.93 0.02 85 / 0.12))",
  background: "var(--veld, oklch(0.14 0.016 50 / 0.6))",
  padding: "16px 18px",
  fontSize: "15px",
  color: "var(--tx60, oklch(0.95 0.02 85 / 0.6))",
  fontFamily: "inherit",
};

const breedVeldStijl: CSSProperties = { ...veldStijl, gridColumn: "span 2" };

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [verzonden, setVerzonden] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Controleer het formulier");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        toast.error(result.error ?? "Er is iets fout gegaan. Probeer het later opnieuw.");
      } else {
        (e.target as HTMLFormElement).reset();
        setVerzonden(true);
      }
    } catch {
      toast.error("Er kon geen verbinding gemaakt worden. Controleer je internetverbinding.");
    } finally {
      setLoading(false);
    }
  }

  if (verzonden) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Yellowtail', cursive",
            fontSize: "44px",
            color: "var(--goud, oklch(0.8 0.105 85))",
          }}
        >
          Proost
        </span>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            color: "var(--tx75, oklch(0.93 0.02 85 / 0.75))",
            maxWidth: "340px",
          }}
        >
          Bedankt voor je aanvraag. We reageren binnen 24 uur met een voorstel op maat.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="wb-form-grid"
      style={{ display: "grid", gap: "16px", gridTemplateColumns: "1fr 1fr" }}
    >
      {/* Honeypot anti-spam field */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <input name="name" placeholder="Naam" style={veldStijl} required />
      <input name="company" placeholder="Bedrijfsnaam (optioneel)" style={veldStijl} />
      <input name="phone" placeholder="Telefoon" style={veldStijl} />
      <input name="email" type="email" placeholder="E-mail" style={veldStijl} required />
      <input name="location" placeholder="Locatie (stad of dorp)" style={breedVeldStijl} />
      <input name="eventDate" placeholder="Eventdatum" style={veldStijl} />
      <input name="guests" placeholder="Aantal gasten" style={veldStijl} />
      <select name="type" defaultValue="" style={keuzeStijl}>
        <option value="">Type event</option>
        <option>Bruiloft</option>
        <option>Bedrijfsevent</option>
        <option>Personeelsborrel</option>
        <option>Tuinfeest</option>
        <option>Verjaardag</option>
        <option>Privé feest</option>
        <option>Anders</option>
      </select>
      <select name="service" defaultValue="" style={keuzeStijl}>
        <option value="">Gewenste dienst</option>
        <option>Cocktail catering</option>
        <option>Cocktail workshops</option>
        <option>Wijnbar</option>
        <option>Speciaalbier bar</option>
        <option>Gin &amp; tonic bar</option>
      </select>
      <textarea
        name="message"
        placeholder="Vertel ons over je event"
        rows={5}
        style={{ ...breedVeldStijl, resize: "none" }}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="wb-form-knop"
        style={{
          gridColumn: "span 2",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          background: "var(--goud, oklch(0.8 0.105 85))",
          color: "var(--op-goud, oklch(0.15 0.018 50))",
          border: "none",
          cursor: "pointer",
          borderRadius: "999px",
          padding: "18px 32px",
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "0.03em",
          fontFamily: "inherit",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? "Verzenden…" : "Verstuur aanvraag"}
        <PijlRechts width="16" height="16" />
      </button>
    </form>
  );
}
