import storyImg from "@/assets/story-craft.jpg";

const GOUD = "var(--goud, oklch(0.8 0.105 85))";
const LIJN = "var(--lijn, oklch(0.8 0.105 85))";

export function FilosofieSection() {
  return (
    <section className="wb-sectie" style={{ padding: "150px 0", position: "relative" }}>
      <div
        className="wb-grid-2"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: "90px",
          alignItems: "center",
        }}
      >
        <div data-reveal="0" style={{ position: "relative" }}>
          <div
            className="wb-zoom-traag"
            style={{
              borderRadius: "300px 300px 24px 24px",
              overflow: "hidden",
              boxShadow: "0 50px 110px -40px var(--schaduw, oklch(0 0 0 / 0.6))",
            }}
          >
            <img
              src={storyImg}
              alt="Bartender garneert een cocktail met sinaasappelschil"
              loading="lazy"
              style={{
                width: "100%",
                height: "560px",
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
              top: "26px",
              right: "-30px",
              animation: "wbFloatC 7s ease-in-out infinite",
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill={LIJN} opacity="0.9">
              <path d="M12 2 l2.2 7.8 L22 12 l-7.8 2.2 L12 22 l-2.2 -7.8 L2 12 l7.8 -2.2 Z"></path>
            </svg>
          </div>
        </div>
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
            Onze filosofie
          </p>
          <h2
            data-reveal="90"
            style={{
              margin: 0,
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "60px",
              lineHeight: 0.96,
              letterSpacing: "-0.01em",
              color: "var(--ink, oklch(0.95 0.02 85))",
            }}
          >
            Smaakvol proosten
            <br />
            <span
              style={{
                fontFamily: "'Yellowtail', cursive",
                fontWeight: 400,
                textTransform: "none",
                fontSize: "52px",
                color: GOUD,
                display: "inline-block",
                transform: "rotate(-3deg)",
                marginTop: "14px",
              }}
            >
              waar je ook viert
            </span>
          </h2>
          <div
            data-reveal="180"
            style={{
              marginTop: "34px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              fontSize: "18px",
              lineHeight: 1.75,
              color: "var(--tx72, oklch(0.93 0.02 85 / 0.72))",
              maxWidth: "520px",
            }}
          >
            <p style={{ margin: 0 }}>
              Een geslaagd feest zit in de details. Een warm welkom, een verrassende cocktail en
              een gesprek dat spontaan ontstaat aan de bar. Precies die momenten maken een
              gelegenheid bijzonder.
            </p>
            <p style={{ margin: 0 }}>
              Daarom brengen we meer dan alleen drankjes naar jouw locatie. We denken met je mee
              over de sfeer, stemmen onze bar af op jouw gasten en verzorgen de service met
              aandacht. Zodat jij niet hoeft te organiseren achter de schermen, maar volop
              kunt genieten met je gasten.
            </p>
          </div>
          <div
            data-reveal="260"
            style={{ marginTop: "36px", display: "flex", alignItems: "center", gap: "14px" }}
          >
            <svg width="46" height="2" viewBox="0 0 46 2" aria-hidden="true">
              <rect width="46" height="2" fill={LIJN}></rect>
            </svg>
            <span style={{ fontFamily: "'Yellowtail', cursive", fontSize: "26px", color: GOUD }}>
              Sinds 2014
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
