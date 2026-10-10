import type { CSSProperties } from "react";
import workshopImg from "@/assets/cocktail-workshop.jpg";

const GOUD = "var(--goud, oklch(0.8 0.105 85))";
const INK = "var(--ink, oklch(0.95 0.02 85))";

const statWaardeStijl: CSSProperties = {
  fontFamily: "'Grandstander', sans-serif",
  fontWeight: 900,
  fontSize: "40px",
  color: GOUD,
  lineHeight: 1,
};

const statLabelStijl: CSSProperties = {
  fontSize: "13px",
  color: "var(--tx55, oklch(0.93 0.02 85 / 0.55))",
  marginTop: "8px",
  letterSpacing: "0.04em",
};

const statKolomStijl: CSSProperties = {
  borderTop: "2px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.35))",
  paddingTop: "16px",
};

export function OverSection() {
  return (
    <section id="over" className="wb-sectie-onder" style={{ padding: "0 0 150px 0" }}>
      <div
        className="wb-grid-2"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: "90px",
          alignItems: "center",
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
            Over Wandering Bar
          </p>
          <h2
            data-reveal="80"
            style={{
              margin: 0,
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "54px",
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              color: INK,
            }}
          >
            Een passie voor cocktails{" "}
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
              en oprechte gastvrijheid
            </span>
          </h2>
          <div
            data-reveal="160"
            style={{
              marginTop: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              fontSize: "17px",
              lineHeight: 1.75,
              color: "var(--tx72, oklch(0.93 0.02 85 / 0.72))",
              maxWidth: "540px",
            }}
          >
            <p style={{ margin: 0 }}>
              Wandering Bar begon met nieuwsgierigheid naar één cocktail en groeide vanuit
              liefde voor smaak, verhalen en gastvrijheid. Diezelfde persoonlijke aandacht
              vormt vandaag nog steeds het uitgangspunt van alles wat we doen.
            </p>
            <p style={{ margin: 0 }}>
              Van cocktailworkshops tot mobiele cocktail-, wijn- en speciaalbierbars: we brengen
              onze barconcepten naar de plek waar jouw verhaal zich afspeelt. Met aandacht
              voor de gasten, de gelegenheid en de kleinste details.
            </p>
            <p style={{ margin: 0 }}>
              Want uiteindelijk gaat het niet alleen om wat er in het glas zit, maar om hoe
              mensen zich voelen. Welkom, ontspannen en samen onderdeel van iets bijzonders.
            </p>
          </div>
          <div
            data-reveal="240"
            className="wb-stats"
            style={{
              marginTop: "44px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "28px",
              maxWidth: "460px",
            }}
          >
            <div style={statKolomStijl}>
              <div className="wb-stat-waarde" style={statWaardeStijl}>
                <span data-count="10" data-suffix="+">
                  0+
                </span>
              </div>
              <div style={statLabelStijl}>Jaar ervaring</div>
            </div>
            <div style={statKolomStijl}>
              <div className="wb-stat-waarde" style={statWaardeStijl}>
                <span data-count="500" data-suffix="+">
                  0+
                </span>
              </div>
              <div style={statLabelStijl}>Events per jaar</div>
            </div>
            <div style={statKolomStijl}>
              <div className="wb-stat-waarde" style={statWaardeStijl}>
                <span data-count="4.9" data-dec="1">
                  0.0
                </span>
              </div>
              <div style={statLabelStijl}>Gemiddelde score</div>
            </div>
          </div>
        </div>
        <div data-reveal="120" style={{ position: "relative" }}>
          <div
            className="wb-zoom-traag"
            style={{
              borderRadius: "300px 300px 24px 24px",
              overflow: "hidden",
              boxShadow: "0 50px 110px -40px var(--schaduw, oklch(0 0 0 / 0.6))",
            }}
          >
            <img
              src={workshopImg}
              alt="Team van Wandering Bar in actie"
              loading="lazy"
              style={{
                width: "100%",
                height: "580px",
                objectFit: "cover",
                display: "block",
                transition: "transform 1.4s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              inset: "-14px",
              borderRadius: "314px 314px 34px 34px",
              border: "1px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.3))",
              pointerEvents: "none",
            }}
          ></div>
          <div
            data-anim
            className="wb-deco-weg"
            style={{
              position: "absolute",
              bottom: "40px",
              left: "-34px",
              animation: "wbFloatB 7.5s ease-in-out infinite",
            }}
          >
            <svg
              width="72"
              height="94"
              viewBox="0 0 64 84"
              fill="none"
              stroke={GOUD}
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path
                d="M14 20 q0 22 18 22 q18 0 18 -22 l0 -6 h-36 Z"
                fill="oklch(0.15 0.018 50 / 0.75)"
              ></path>
              <path d="M32 42 v26"></path>
              <path d="M18 72 h28"></path>
              <path d="M20 10 l6 4" opacity="0.6"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
