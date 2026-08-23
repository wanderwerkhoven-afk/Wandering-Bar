import type { CSSProperties } from "react";
import corporateImg from "@/assets/event-corporate.jpg";
import festivalImg from "@/assets/event-festival.jpg";
import heroImg from "@/assets/hero-bartender.jpg";
import privateImg from "@/assets/event-private.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import workshopImg from "@/assets/cocktail-workshop.jpg";
import { PijlRechts } from "./siteIcons";

const GOUD = "var(--goud, oklch(0.8 0.105 85))";
const GOUD_VAST = "var(--goud-vast, oklch(0.8 0.105 85))";
const INK = "var(--ink, oklch(0.95 0.02 85))";

type EventTegel = {
  titel: string;
  tagline: string;
  img: string;
  reveal: string;
  groot: boolean;
};

const tegels: EventTegel[] = [
  {
    titel: "Bruiloften",
    tagline: "Romantisch · Sfeervol · Elegant",
    img: weddingImg,
    reveal: "0",
    groot: true,
  },
  {
    titel: "Personeelsborrels",
    tagline: "Gezellig · Verbindend",
    img: corporateImg,
    reveal: "90",
    groot: false,
  },
  {
    titel: "Tuinfeesten",
    tagline: "Zomers · Warm · Sfeervol",
    img: privateImg,
    reveal: "180",
    groot: false,
  },
  {
    titel: "Verjaardagen",
    tagline: "Feestelijk · Persoonlijk",
    img: heroImg,
    reveal: "0",
    groot: false,
  },
  {
    titel: "Workshops",
    tagline: "Interactief · Creatief",
    img: workshopImg,
    reveal: "90",
    groot: false,
  },
  {
    titel: "Bedrijfsevents",
    tagline: "Professioneel · Luxe · Gastvrij",
    img: festivalImg,
    reveal: "180",
    groot: true,
  },
];

const overlayStijl: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, oklch(0.13 0.016 50 / 0.88), oklch(0.13 0.016 50 / 0.15) 55%, transparent)",
};

const randStijl: CSSProperties = {
  position: "absolute",
  inset: "14px",
  borderRadius: "16px",
  border: "1px solid var(--goud-vast-soft, oklch(0.8 0.105 85 / 0.3))",
  pointerEvents: "none",
};

export function EventsSection() {
  return (
    <section id="events" style={{ padding: "70px 0 150px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <p
            data-reveal="0"
            style={{
              margin: "0 0 20px 0",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: GOUD,
            }}
          >
            Sfeer &amp; cases
          </p>
          <h2
            data-reveal="80"
            style={{
              margin: "0 auto",
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "56px",
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              color: INK,
              maxWidth: "800px",
            }}
          >
            Ieder event zijn{" "}
            <span
              style={{
                fontFamily: "'Yellowtail', cursive",
                fontWeight: 400,
                textTransform: "none",
                fontSize: "56px",
                color: GOUD,
              }}
            >
              eigen ritueel
            </span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {tegels.map((tegel) => (
            <a
              key={tegel.titel}
              href="#contact"
              data-reveal={tegel.reveal}
              className="wb-event"
              style={{
                gridColumn: tegel.groot ? "span 2" : undefined,
                gridRow: tegel.groot ? "span 2" : undefined,
                position: "relative",
                overflow: "hidden",
                borderRadius: "24px",
                display: "block",
                transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <img
                src={tegel.img}
                alt={tegel.titel}
                loading="lazy"
                style={{
                  width: "100%",
                  height: tegel.groot ? "620px" : "299px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={overlayStijl}></div>
              <div style={randStijl}></div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  padding: tegel.groot ? "36px" : "28px",
                }}
              >
                <p
                  style={{
                    margin: tegel.groot ? "0 0 10px 0" : "0 0 8px 0",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "oklch(0.88 0.07 115)",
                  }}
                >
                  {tegel.tagline}
                </p>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Grandstander', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    fontSize: tegel.groot ? "34px" : "24px",
                    color: "oklch(0.95 0.02 85)",
                  }}
                >
                  {tegel.titel}
                </h3>
                {tegel.groot && (
                  <span
                    style={{
                      marginTop: "10px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "9px",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: GOUD_VAST,
                    }}
                  >
                    Ontdek <PijlRechts width="14" height="14" />
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
