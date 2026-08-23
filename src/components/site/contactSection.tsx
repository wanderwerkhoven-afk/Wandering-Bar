import type { CSSProperties, ReactNode } from "react";
import { ContactForm } from "./ContactForm";
import { MailIcon, PinIcon, TelefoonIcon } from "./siteIcons";

const GOUD = "var(--goud, oklch(0.8 0.105 85))";
const INK = "var(--ink, oklch(0.95 0.02 85))";

const ringStijl: CSSProperties = {
  width: "52px",
  height: "52px",
  borderRadius: "999px",
  border: "1.5px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.35))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const labelStijl: CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "var(--tx45, oklch(0.93 0.02 85 / 0.45))",
  marginBottom: "4px",
};

const waardeStijl: CSSProperties = { fontSize: "18px", fontWeight: 600, color: INK };

function ContactRegel({
  icoon,
  label,
  children,
}: {
  icoon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
      <div style={ringStijl}>{icoon}</div>
      <div>
        <div style={labelStijl}>{label}</div>
        {children}
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="wb-sectie-onder" style={{ padding: "0 0 150px 0" }}>
      <div
        className="wb-grid-contact"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        <div>
          <p
            data-reveal="0"
            style={{
              margin: "0 0 22px 0",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: GOUD,
            }}
          >
            Contact
          </p>
          <h2
            data-reveal="80"
            style={{
              margin: 0,
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "52px",
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              color: INK,
            }}
          >
            Laat ons jouw event{" "}
            <span
              style={{
                fontFamily: "'Yellowtail', cursive",
                fontWeight: 400,
                textTransform: "none",
                fontSize: "48px",
                color: GOUD,
                display: "inline-block",
                transform: "rotate(-2deg)",
              }}
            >
              tot leven brengen
            </span>
          </h2>
          <p
            data-reveal="160"
            style={{
              margin: "26px 0 0 0",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--tx68, oklch(0.93 0.02 85 / 0.68))",
              maxWidth: "420px",
            }}
          >
            Vertel ons over je gelegenheid, datum en wensen. We reageren binnen 24 uur met een
            voorstel op maat.
          </p>
          <div
            data-reveal="240"
            style={{
              marginTop: "44px",
              display: "flex",
              flexDirection: "column",
              gap: "26px",
            }}
          >
            <ContactRegel
              icoon={<TelefoonIcon width="19" height="19" stroke={GOUD} />}
              label="Telefoon"
            >
              <a href="tel:+31610332492" className="wb-contact-link" style={waardeStijl}>
                +31 (0)6 10 33 24 92
              </a>
            </ContactRegel>
            <ContactRegel icoon={<MailIcon width="19" height="19" stroke={GOUD} />} label="E-mail">
              <a href="mailto:info@wanderingbar.nl" className="wb-contact-link" style={waardeStijl}>
                info@wanderingbar.nl
              </a>
            </ContactRegel>
            <ContactRegel icoon={<PinIcon width="19" height="19" stroke={GOUD} />} label="Locatie">
              <p style={{ margin: 0, ...waardeStijl }}>Enkhuizen, werkzaam door heel Nederland</p>
            </ContactRegel>
          </div>
        </div>
        <div
          data-reveal="120"
          className="wb-form-kaart"
          style={{
            borderRadius: "28px",
            background: "var(--kaart, oklch(0.17 0.02 52 / 0.7))",
            border: "1px solid var(--goud-glow, oklch(0.8 0.105 85 / 0.14))",
            padding: "46px",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
