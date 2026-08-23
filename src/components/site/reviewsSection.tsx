import type { CSSProperties } from "react";
import { Ster } from "./siteIcons";

const GOUD = "var(--goud, oklch(0.8 0.105 85))";
const INK = "var(--ink, oklch(0.95 0.02 85))";

const kaartStijl: CSSProperties = {
  borderRadius: "26px",
  background: "var(--kaart, oklch(0.17 0.02 52 / 0.6))",
  border: "1px solid var(--goud-glow, oklch(0.8 0.105 85 / 0.14))",
  padding: "40px",
  transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.4s",
};

const reviews = [
  {
    reveal: "0",
    quote:
      "Wandering Bar heeft onze bruiloft naar een hoger niveau getild. Sfeervol, vakkundig en gastvrij. Onze gasten praten er nog steeds over.",
    naam: "Sophie & Daan",
    type: "Bruiloft, Landgoed Duin & Kruidberg",
  },
  {
    reveal: "110",
    quote:
      "Stijlvolle bar, top cocktails en een team dat écht weet wat hospitality is. Zeker een aanrader voor elk corporate event.",
    naam: "Marleen V.",
    type: "Bedrijfsevent, Amsterdam",
  },
  {
    reveal: "220",
    quote:
      "De workshop was de absolute hit van ons jubileum. Persoonlijk, leerzaam en ongelofelijk gezellig.",
    naam: "Team Helder",
    type: "Private workshop",
  },
];

export function ReviewsSection() {
  return (
    <section style={{ padding: "0 0 150px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ textAlign: "center", marginBottom: "66px" }}>
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
            Wat gasten zeggen
          </p>
          <h2
            data-reveal="80"
            style={{
              margin: "0 auto",
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "54px",
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              color: INK,
              maxWidth: "760px",
            }}
          >
            Verhalen van{" "}
            <span
              style={{
                fontFamily: "'Yellowtail', cursive",
                fontWeight: 400,
                textTransform: "none",
                fontSize: "54px",
                color: GOUD,
              }}
            >
              gasten en gastheren
            </span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "26px" }}>
          {reviews.map((review) => (
            <article
              key={review.naam}
              data-reveal={review.reveal}
              className="wb-pijler"
              style={kaartStijl}
            >
              <div
                style={{
                  fontFamily: "'Yellowtail', cursive",
                  fontSize: "54px",
                  lineHeight: 0.6,
                  color: GOUD,
                }}
              >
                &rdquo;
              </div>
              <p
                style={{
                  margin: "22px 0 0 0",
                  fontSize: "17px",
                  lineHeight: 1.75,
                  color: "var(--tx85, oklch(0.93 0.02 85 / 0.85))",
                }}
              >
                {review.quote}
              </p>
              <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "5px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Ster key={i} width="15" height="15" fill={GOUD} />
                ))}
              </div>
              <div style={{ marginTop: "18px" }}>
                <div
                  style={{
                    fontFamily: "'Grandstander', sans-serif",
                    fontWeight: 800,
                    fontSize: "17px",
                    color: INK,
                  }}
                >
                  {review.naam}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--tx50, oklch(0.93 0.02 85 / 0.5))",
                    marginTop: "3px",
                  }}
                >
                  {review.type}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
