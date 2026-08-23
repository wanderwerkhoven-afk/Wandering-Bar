import type { CSSProperties } from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./siteIcons";

const kopStijl: CSSProperties = {
  margin: "0 0 20px 0",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.26em",
  textTransform: "uppercase",
  color: "var(--goud-vast, oklch(0.8 0.105 85))",
};

const lijstStijl: CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  fontSize: "14px",
  color: "oklch(0.93 0.02 85 / 0.7)",
};

const socialStijl: CSSProperties = {
  height: "42px",
  width: "42px",
  borderRadius: "999px",
  border: "1px solid var(--goud-vast-soft, oklch(0.8 0.105 85 / 0.3))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--goud-vast, oklch(0.8 0.105 85))",
  transition: "all 0.3s",
};

const diensten = ["Cocktail catering", "Cocktail workshops", "Wijnbar", "Speciaalbier bar"];
const eventLinks = [
  "Bruiloften",
  "Bedrijfsevents",
  "Personeelsborrels",
  "Tuinfeesten",
  "Verjaardagen",
];

export function Footer() {
  return (
    <footer
      style={{
        background: "oklch(0.12 0.014 50)",
        borderTop: "1px solid var(--goud-vast-glow, oklch(0.8 0.105 85 / 0.12))",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "80px 28px 60px 28px",
          display: "grid",
          gap: "56px",
          gridTemplateColumns: "1.4fr 0.8fr 0.8fr 1fr",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <span
              style={{
                fontFamily: "'Grandstander', sans-serif",
                fontWeight: 900,
                fontSize: "30px",
                textTransform: "uppercase",
                color: "oklch(0.95 0.02 85)",
              }}
            >
              Wandering
            </span>
            <span
              style={{
                fontFamily: "'Yellowtail', cursive",
                fontSize: "36px",
                color: "var(--goud-vast, oklch(0.8 0.105 85))",
                transform: "rotate(-4deg)",
                display: "inline-block",
              }}
            >
              Bar
            </span>
          </div>
          <p
            style={{
              margin: "18px 0 0 0",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "oklch(0.93 0.02 85 / 0.55)",
              maxWidth: "300px",
            }}
          >
            Luxe mobiele cocktailbars, catering en workshops voor onvergetelijke events in heel
            Nederland.
          </p>
          <div style={{ marginTop: "26px", display: "flex", gap: "12px" }}>
            <a href="#" aria-label="Instagram" className="wb-social" style={socialStijl}>
              <InstagramIcon width="17" height="17" />
            </a>
            <a href="#" aria-label="Facebook" className="wb-social" style={socialStijl}>
              <FacebookIcon width="17" height="17" />
            </a>
            <a href="#" aria-label="LinkedIn" className="wb-social" style={socialStijl}>
              <LinkedinIcon width="17" height="17" />
            </a>
          </div>
        </div>

        <div>
          <h4 style={kopStijl}>Diensten</h4>
          <ul style={lijstStijl}>
            {diensten.map((dienst) => (
              <li key={dienst}>
                <a href="#diensten" className="wb-footer-link">
                  {dienst}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={kopStijl}>Events</h4>
          <ul style={lijstStijl}>
            {eventLinks.map((label) => (
              <li key={label}>
                <a href="#events" className="wb-footer-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={kopStijl}>Contact</h4>
          <ul style={lijstStijl}>
            <li>
              Thuisbasis in Enkhuizen
              <br />
              Werkzaam door heel Nederland
            </li>
            <li>
              <a href="tel:+31610332492" className="wb-footer-link">
                +31 (0)6 10 33 24 92
              </a>
            </li>
            <li>
              <a href="mailto:info@wanderingbar.nl" className="wb-footer-link">
                info@wanderingbar.nl
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid oklch(0.93 0.02 85 / 0.08)" }}>
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "24px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "14px",
            fontSize: "12.5px",
            color: "oklch(0.93 0.02 85 / 0.4)",
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Wandering Bar. Alle rechten voorbehouden.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontFamily: "'Yellowtail', cursive",
                fontSize: "17px",
                color: "var(--goud-vast-soft, oklch(0.8 0.105 85 / 0.5))",
              }}
            >
              geschud, niet geroerd
            </span>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" className="wb-footer-link">
              Privacy
            </a>
            <a href="#" className="wb-footer-link">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
