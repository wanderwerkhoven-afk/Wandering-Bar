import type { CSSProperties, ReactNode } from "react";
import { ShakerIcon, Ster, WijnGlasIcon } from "./siteIcons";

const GOUD = "var(--goud, oklch(0.8 0.105 85))";
const INK = "var(--ink, oklch(0.95 0.02 85))";

const kaartStijl: CSSProperties = {
  textAlign: "center",
  border: "1px solid var(--goud-glow, oklch(0.8 0.105 85 / 0.14))",
  borderRadius: "26px",
  padding: "52px 36px",
  background: "var(--kaart, oklch(0.17 0.02 52 / 0.5))",
  transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), border-color 0.4s",
};

const ringStijl: CSSProperties = {
  margin: "0 auto",
  width: "92px",
  height: "92px",
  borderRadius: "999px",
  border: "1.5px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.35))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titelStijl: CSSProperties = {
  margin: "30px 0 0 0",
  fontFamily: "'Grandstander', sans-serif",
  fontWeight: 800,
  textTransform: "uppercase",
  fontSize: "28px",
  color: INK,
};

const tekstStijl: CSSProperties = {
  margin: "16px auto 0 auto",
  fontSize: "16px",
  lineHeight: 1.7,
  color: "var(--tx65, oklch(0.93 0.02 85 / 0.65))",
  maxWidth: "300px",
};

type Pijler = {
  reveal: string;
  titel: string;
  tekst: string;
  ring: ReactNode;
  ringExtra?: ReactNode;
};

const pijlers: Pijler[] = [
  {
    reveal: "0",
    titel: "Crafted",
    tekst:
      "Ambacht in elk glas. We werken met verse handgemaakte ingrediënten, eigen siropen en sappen, en doordachte garnering.",
    ring: (
      <ShakerIcon
        data-anim
        width="40"
        height="52"
        stroke={GOUD}
        strokeWidth="2"
        style={{ animation: "wbFloatC 5.5s ease-in-out infinite" }}
      >
        <path d="M10 26 h19" opacity="0.4"></path>
      </ShakerIcon>
    ),
    ringExtra: (
      <span
        data-anim
        style={{
          position: "absolute",
          top: "-4px",
          right: "-2px",
          animation: "wbTwinkle 3.4s ease-in-out infinite",
        }}
      >
        <Ster width="16" height="16" fill={GOUD} />
      </span>
    ),
  },
  {
    reveal: "110",
    titel: "Service",
    tekst:
      "Of het nu een mixoloog of sommelier is, onze vakmensen brengen sfeer en kennis naar je bar voor een complete beleving.",
    ring: (
      <svg
        data-anim
        width="42"
        height="42"
        viewBox="0 0 48 48"
        fill="none"
        stroke={GOUD}
        strokeWidth="2"
        strokeLinecap="round"
        style={{ animation: "wbFloatC 6.2s ease-in-out 0.5s infinite" }}
        aria-hidden="true"
      >
        <circle cx="17" cy="15" r="7"></circle>
        <path d="M4 42 v-3 a10 10 0 0 1 10 -10 h6 a10 10 0 0 1 10 10 v3"></path>
        <path d="M33 9 a7 7 0 0 1 0 12" opacity="0.6"></path>
        <path d="M36 29 a10 10 0 0 1 8 10 v3" opacity="0.6"></path>
      </svg>
    ),
  },
  {
    reveal: "220",
    titel: "Stijlvol",
    tekst:
      "Van luxe mobiele bars tot professioneel glaswerk en passende aankleding die aansluit bij jouw event.",
    ring: (
      <WijnGlasIcon
        data-anim
        width="34"
        height="48"
        stroke={GOUD}
        strokeWidth="2"
        style={{ animation: "wbFloatC 5.8s ease-in-out 1s infinite" }}
      >
        <path d="M12 8 h12" opacity="0.4"></path>
      </WijnGlasIcon>
    ),
  },
];

export function PijlersSection() {
  return (
    <section
      style={{
        padding: "150px 0",
        position: "relative",
        background:
          "radial-gradient(900px 500px at 50% 0%, var(--glow-c, oklch(0.19 0.025 55 / 0.7)), transparent 70%), var(--bg, oklch(0.15 0.018 50))",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <p
          data-reveal="0"
          style={{
            margin: "0 0 20px 0",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: GOUD,
          }}
        >
          Onze pijlers
        </p>
        <h2
          data-reveal="80"
          style={{
            margin: "0 auto",
            textAlign: "center",
            fontFamily: "'Grandstander', sans-serif",
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: "56px",
            lineHeight: 0.98,
            letterSpacing: "-0.01em",
            color: INK,
            maxWidth: "820px",
          }}
        >
          Drie principes die elk glas{" "}
          <span
            style={{
              fontFamily: "'Yellowtail', cursive",
              fontWeight: 400,
              textTransform: "none",
              fontSize: "56px",
              color: GOUD,
            }}
          >
            bijzonder
          </span>{" "}
          maken
        </h2>
        <div
          style={{
            marginTop: "90px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "36px",
          }}
        >
          {pijlers.map((pijler) => (
            <div
              key={pijler.titel}
              data-reveal={pijler.reveal}
              className="wb-pijler"
              style={kaartStijl}
            >
              <div style={pijler.ringExtra ? { ...ringStijl, position: "relative" } : ringStijl}>
                {pijler.ring}
                {pijler.ringExtra}
              </div>
              <h3 style={titelStijl}>{pijler.titel}</h3>
              <p style={tekstStijl}>{pijler.tekst}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
