import type { CSSProperties, RefObject } from "react";
import heroImg from "@/assets/hero-bartender.jpg";
import {
  BierIcon,
  CocktailGlasIcon,
  PijlRechts,
  ShakerIcon,
  Ster,
  WijnGlasIcon,
} from "./siteIcons";

const GOUD = "var(--goud, oklch(0.8 0.105 85))";
const LIJN = "var(--lijn, oklch(0.8 0.105 85))";
const LIJN_ZACHT = "var(--lijn-zacht, oklch(0.8 0.105 85 / 0.5))";
const LIJN_VLAK = "var(--lijn-vlak, oklch(0.8 0.105 85 / 0.14))";
const PARA_TRANSITIE = "translate 0.6s cubic-bezier(0.22,1,0.36,1)";

const marqueeTekstStijl: CSSProperties = {
  fontFamily: "'Grandstander', sans-serif",
  fontWeight: 700,
  fontSize: "16px",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "var(--tx80, oklch(0.93 0.02 85 / 0.8))",
  whiteSpace: "nowrap",
};

function rockStijl(delay: string): CSSProperties {
  return {
    animation: `wbRock 2.6s ease-in-out ${delay}infinite`,
    transformOrigin: "50% 82%",
  };
}

function MarqueeGroep() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "44px", padding: "18px 22px" }}>
      <span style={marqueeTekstStijl}>Cocktail catering</span>
      <CocktailGlasIcon width="20" height="26" stroke={LIJN} data-anim style={rockStijl("")} />
      <span style={marqueeTekstStijl}>Cocktail workshops</span>
      <ShakerIcon width="18" height="26" stroke={LIJN} data-anim style={rockStijl("0.9s ")} />
      <span style={marqueeTekstStijl}>Luxe wijnbar</span>
      <WijnGlasIcon width="18" height="26" stroke={LIJN} data-anim style={rockStijl("0.9s ")} />
      <span style={marqueeTekstStijl}>Speciaalbier bar</span>
      <BierIcon width="22" height="26" stroke={LIJN} data-anim style={rockStijl("1.6s ")} />
      <span style={marqueeTekstStijl}>Gin &amp; tonic bar</span>
      <Ster width="16" height="16" fill={LIJN} />
    </div>
  );
}

const titel = "Wandering";
const titel2 = "Bar";

export function HeroSection({ heroRef }: { heroRef: RefObject<HTMLElement | null> }) {
  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        background:
          "radial-gradient(1100px 700px at 78% 30%, var(--glow-a, oklch(0.22 0.035 60 / 0.9)), transparent 65%), radial-gradient(900px 600px at 8% 85%, var(--glow-b, oklch(0.19 0.03 45 / 0.8)), transparent 60%), var(--bg, oklch(0.15 0.018 50))",
      }}
    >
      <div
        className="wb-hero-grid"
        style={{
          boxSizing: "border-box",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: "48px",
          alignItems: "center",
          maxWidth: "1240px",
          width: "100%",
          margin: "0 auto",
          padding: "150px 28px 60px 28px",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 5 }}>
          <div
            data-badge
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.3))",
              borderRadius: "999px",
              padding: "9px 18px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: GOUD,
              marginBottom: "34px",
            }}
          >
            <span
              data-anim
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                background: GOUD,
                animation: "wbPulse 2.4s ease-out infinite",
              }}
            ></span>
            Nu beschikbaar voor boekingen
          </div>
          <h1
            className="wb-hero-titel"
            style={{
              margin: 0,
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "clamp(64px, 7.8vw, 108px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: "var(--ink, oklch(0.95 0.02 85))",
            }}
          >
            <span
              style={{
                display: "block",
                overflow: "hidden",
                paddingBottom: "0.05em",
                marginBottom: "-0.05em",
              }}
            >
              {titel.split("").map((letter, i) => (
                <span data-lt key={`${letter}-${i}`} style={{ display: "inline-block" }}>
                  {letter}
                </span>
              ))}
            </span>
            <span style={{ display: "block", overflow: "visible" }}>
              <span
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "bottom",
                  paddingBottom: "0.05em",
                  marginBottom: "-0.05em",
                }}
              >
                {titel2.split("").map((letter, i) => (
                  <span data-lt key={`${letter}-${i}`} style={{ display: "inline-block" }}>
                    {letter}
                  </span>
                ))}
              </span>
              <span
                data-scriptin
                style={{
                  fontFamily: "'Yellowtail', cursive",
                  fontWeight: 400,
                  textTransform: "none",
                  fontSize: "clamp(38px, 3.6vw, 58px)",
                  color: GOUD,
                  display: "inline-block",
                  transform: "rotate(-5deg) translateY(-8px)",
                  marginLeft: "18px",
                  letterSpacing: 0,
                }}
              >
                op locatie
              </span>
            </span>
          </h1>
          <p
            data-hero-fade
            style={{
              margin: "34px 0 0 0",
              maxWidth: "480px",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "var(--tx72, oklch(0.93 0.02 85 / 0.72))",
            }}
          >
            Cocktail catering, workshops en luxe mobiele bars voor elk event, van intieme borrels
            tot grootse bruiloften en bedrijfsfeesten. Wij komen naar jou, shaker in de hand.
          </p>
          <div
            data-hero-fade
            style={{
              marginTop: "42px",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <a
              href="#contact"
              className="wb-hero-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: GOUD,
                color: "var(--op-goud, oklch(0.15 0.018 50))",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.03em",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                boxShadow: "0 18px 50px -18px var(--goud-soft, oklch(0.8 0.105 85 / 0.5))",
              }}
            >
              Vraag een offerte aan
              <PijlRechts width="17" height="17" />
            </a>
            <a
              href="#bars"
              className="wb-hero-cta2"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                border: "1.5px solid var(--rand-knop, oklch(0.93 0.02 85 / 0.25))",
                color: "var(--ink, oklch(0.95 0.02 85))",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.03em",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              Bekijk onze bars
            </a>
          </div>
        </div>

        <div className="wb-hero-visual" style={{ position: "relative", height: "640px" }}>
          <div
            data-para="14"
            style={{ position: "absolute", inset: 0, transition: PARA_TRANSITIE }}
          >
            <div
              data-hero-arch
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "320px 320px 28px 28px",
                overflow: "hidden",
                boxShadow: "0 60px 120px -40px var(--schaduw, oklch(0 0 0 / 0.65))",
              }}
            >
              <img
                src={heroImg}
                alt="Bartender schenkt een cocktail bij zonsondergang"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, oklch(0.15 0.018 50 / 0.55), transparent 45%)",
                }}
              ></div>
            </div>
            <div
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "336px 336px 36px 36px",
                border: "1px solid var(--rand-deco, oklch(0.8 0.105 85 / 0.35))",
                pointerEvents: "none",
              }}
            ></div>
          </div>

          <div
            data-para="26"
            className="wb-hero-deco"
            style={{
              position: "absolute",
              bottom: "36px",
              right: "-58px",
              zIndex: 6,
              transition: PARA_TRANSITIE,
            }}
          >
            <div data-anim style={{ animation: "wbFloatB 8.5s ease-in-out 0.8s infinite" }}>
              <svg
                width="110"
                height="140"
                viewBox="0 0 110 140"
                fill="none"
                stroke={LIJN}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ overflow: "visible" }}
                aria-hidden="true"
              >
                <g
                  data-anim
                  style={{
                    animation: "wbSway 5.6s ease-in-out infinite",
                    transformOrigin: "55px 122px",
                  }}
                >
                  <path d="M18 16 h74 L55 66 Z"></path>
                  <path d="M30 26 h50" stroke={LIJN_ZACHT}></path>
                  <path d="M55 66 v46"></path>
                  <path d="M33 122 h44"></path>
                  <g
                    data-anim
                    style={{
                      animation: "wbCounterSway 5.6s ease-in-out infinite",
                      transformOrigin: "55px 30px",
                    }}
                  >
                    <path d="M27 24 h56 L55 61 Z" fill={LIJN_VLAK} stroke="none"></path>
                    <circle cx="55" cy="34" r="6" fill={LIJN_VLAK}></circle>
                    <path d="M55 28 l10 -14"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div
            data-para="44"
            className="wb-hero-deco"
            style={{
              position: "absolute",
              top: "186px",
              right: "-92px",
              zIndex: 4,
              transition: PARA_TRANSITIE,
            }}
          >
            <div data-anim style={{ animation: "wbFloatC 6.4s ease-in-out 0.4s infinite" }}>
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                stroke={LIJN}
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <g
                  data-anim
                  style={{
                    animation: "wbSpin360 46s linear infinite",
                    transformOrigin: "36px 36px",
                  }}
                >
                  <circle cx="36" cy="36" r="26"></circle>
                  <circle cx="36" cy="36" r="19" stroke={LIJN_ZACHT}></circle>
                  <path
                    d="M36 17 v38 M17 36 h38 M23 23 l26 26 M49 23 l-26 26"
                    stroke={LIJN_ZACHT}
                  ></path>
                </g>
              </svg>
            </div>
          </div>

          <div
            data-para="20"
            className="wb-hero-deco"
            style={{
              position: "absolute",
              bottom: "-6px",
              left: "34px",
              zIndex: 6,
              transition: PARA_TRANSITIE,
            }}
          >
            <div data-anim style={{ animation: "wbFloatC 7.6s ease-in-out 1.6s infinite" }}>
              <svg
                width="54"
                height="66"
                viewBox="0 0 54 66"
                fill="none"
                stroke={LIJN}
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="24" cy="46" r="12" fill={LIJN_VLAK}></circle>
                <path d="M24 34 q2 -18 20 -26"></path>
                <path d="M44 8 q-8 0 -10 8 q8 2 10 -8 Z" fill={LIJN_VLAK}></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--goud-glow, oklch(0.8 0.105 85 / 0.12))",
          borderBottom: "1px solid var(--goud-glow, oklch(0.8 0.105 85 / 0.12))",
          background: "var(--strip, oklch(0.13 0.016 50 / 0.6))",
          overflow: "hidden",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          data-anim
          style={{
            display: "flex",
            width: "max-content",
            animation: "wbMarquee 30s linear infinite",
          }}
        >
          <MarqueeGroep />
          <MarqueeGroep />
        </div>
      </div>
    </section>
  );
}
