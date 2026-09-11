import heroImg from "@/assets/hero-bartender.jpg";
import { LogoMark } from "./logoMark";
import { PijlRechts, Ster } from "./siteIcons";
import { PourScene } from "./pourSceneView";
import { useBodyThema, useDocumentTitel } from "./siteMotion";

const GOUD = "oklch(0.8 0.105 85)";
const GOUD_ZACHT = "oklch(0.8 0.105 85 / 0.15)";
const REVEAL = (delay: string) => `wbReveal 1s cubic-bezier(0.22,1,0.36,1) ${delay} forwards`;

export function ComingSoon({ onEnter }: { onEnter: () => void }) {
  useDocumentTitel("Wandering Bar · Binnenkort geschonken");
  useBodyThema("donker");

  return (
    <div
      className="wb-root"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1000px 640px at 72% 18%, oklch(0.21 0.032 60 / 0.85), transparent 62%), radial-gradient(800px 520px at 12% 90%, oklch(0.18 0.028 45 / 0.85), transparent 60%), oklch(0.15 0.018 50)",
        color: "oklch(0.93 0.02 85)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Figtree', ui-sans-serif, system-ui, sans-serif",
        colorScheme: "dark",
      }}
    >
      <img
        src={heroImg}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.14,
          mixBlendMode: "luminosity",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(closest-side, transparent 40%, oklch(0.13 0.016 50 / 0.9)), linear-gradient(to top, oklch(0.14 0.016 50 / 0.95), transparent 55%)",
        }}
      ></div>

      <header
        style={{
          position: "relative",
          zIndex: 10,
          height: "92px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "100%",
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="wb-cs-logo"
            style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}
          >
            <LogoMark hoogte={38} ink="oklch(0.95 0.02 85)" goud={GOUD} />
            <span
              className="wb-cs-logo-woord"
              style={{ display: "flex", alignItems: "baseline", gap: "8px" }}
            >
              <span
                style={{
                  fontFamily: "'Grandstander', sans-serif",
                  fontWeight: 900,
                  fontSize: "24px",
                  textTransform: "uppercase",
                  color: "oklch(0.95 0.02 85)",
                }}
              >
                Wandering
              </span>
              <span
                style={{
                  fontFamily: "'Yellowtail', cursive",
                  fontSize: "29px",
                  color: GOUD,
                  transform: "rotate(-4deg)",
                  display: "inline-block",
                }}
              >
                Bar
              </span>
            </span>
          </div>
          <div
            className="wb-cs-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid oklch(0.8 0.105 85 / 0.3)",
              borderRadius: "999px",
              padding: "9px 18px",
              fontSize: "11.5px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: GOUD,
            }}
          >
            <span
              className="wb-cs-float"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                background: GOUD,
                animation: "wbPulse 2.4s ease-out infinite",
              }}
            ></span>
            <span className="wb-cs-badge-lang">Binnenkort online</span>
            <span className="wb-cs-badge-kort" aria-hidden="true">
              Binnenkort
            </span>
          </div>
        </div>
      </header>

      <div
        className="wb-cs-grid"
        style={{
          boxSizing: "border-box",
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          alignItems: "center",
          maxWidth: "1240px",
          width: "100%",
          margin: "0 auto",
          padding: "20px 28px 80px 28px",
        }}
      >
        <div>
          <p
            className="wb-cs-reveal"
            style={{
              margin: "0 0 26px 0",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: GOUD,
              opacity: 0,
              transform: "translateY(26px)",
              animation: REVEAL("0.1s"),
            }}
          >
            Mobiele cocktailbar · Catering · Workshops
          </p>
          <h1
            className="wb-cs-reveal wb-cs-titel"
            style={{
              margin: 0,
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "clamp(60px, 7.4vw, 102px)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              color: "oklch(0.95 0.02 85)",
              opacity: 0,
              transform: "translateY(26px)",
              animation: REVEAL("0.25s"),
            }}
          >
            Wandering
            <br />
            Bar
          </h1>
          <p
            className="wb-cs-reveal"
            style={{
              margin: "10px 0 0 6px",
              fontFamily: "'Yellowtail', cursive",
              fontSize: "clamp(34px, 3.4vw, 50px)",
              color: GOUD,
              transform: "rotate(-3deg)",
              opacity: 0,
              animation: REVEAL("0.45s"),
            }}
          >
            achter de schermen zijn we druk aan het shaken
          </p>
          <div
            className="wb-cs-reveal"
            style={{
              marginTop: "34px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              maxWidth: "520px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "oklch(0.93 0.02 85 / 0.72)",
              opacity: 0,
              transform: "translateY(26px)",
              animation: REVEAL("0.6s"),
            }}
          >
            <p style={{ margin: 0 }}>
              Terwijl de cocktails worden getest, de glazen gepolijst en de laatste details worden
              gemixt, werken wij aan een nieuwe online beleving vol sfeer, cocktails en hospitality.
            </p>
            <p style={{ margin: 0 }}>
              Binnenkort vind je hier alles over onze cocktail catering, workshops, wijnbars en
              speciaalbierbars op locatie.
            </p>
          </div>
          <div
            className="wb-cs-reveal"
            style={{
              marginTop: "40px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "18px",
              opacity: 0,
              transform: "translateY(26px)",
              animation: REVEAL("0.75s"),
            }}
          >
            <a
              href="mailto:info@wanderingbar.nl"
              className="wb-cs-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: GOUD,
                color: "oklch(0.15 0.018 50)",
                borderRadius: "999px",
                padding: "18px 32px",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.03em",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                boxShadow: "0 18px 50px -18px oklch(0.8 0.105 85 / 0.5)",
              }}
            >
              Neem alvast contact op
              <PijlRechts width="17" height="17" />
            </a>
            <a
              href="tel:+31610332492"
              className="wb-cs-tel"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "oklch(0.93 0.02 85 / 0.75)",
                borderBottom: "1px solid oklch(0.8 0.105 85 / 0.35)",
                paddingBottom: "3px",
              }}
            >
              +31 (0)6 10 33 24 92
            </a>
          </div>
        </div>

        <div
          className="wb-cs-reveal wb-cs-visual"
          style={{
            position: "relative",
            height: "560px",
            opacity: 0,
            animation: "wbReveal 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s forwards",
          }}
        >
          <div
            className="wb-cs-scene"
            style={{ position: "absolute", top: "6%", left: "50%", transform: "translateX(-50%)" }}
          >
            <PourScene width={330} height={536} goud={GOUD} metTwinkles />
          </div>
          <div
            className="wb-cs-float wb-cs-deco"
            style={{
              position: "absolute",
              top: "30px",
              left: "-14px",
              animation: "wbCsFloatB 7.5s ease-in-out infinite",
            }}
          >
            <svg
              width="86"
              height="112"
              viewBox="0 0 110 140"
              fill="none"
              stroke={GOUD}
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.75"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <g
                className="wb-cs-float"
                style={{
                  animation: "wbSway 5.6s ease-in-out infinite",
                  transformOrigin: "55px 122px",
                }}
              >
                <path d="M18 16 h74 L55 66 Z"></path>
                <path d="M55 66 v46"></path>
                <path d="M33 122 h44"></path>
                <g
                  className="wb-cs-float"
                  style={{
                    animation: "wbCounterSway 5.6s ease-in-out infinite",
                    transformOrigin: "55px 30px",
                  }}
                >
                  <path d="M27 24 h56 L55 61 Z" fill={GOUD_ZACHT} stroke="none"></path>
                  <circle cx="55" cy="34" r="6" fill={GOUD_ZACHT}></circle>
                  <path d="M55 28 l10 -14"></path>
                </g>
              </g>
            </svg>
          </div>
          <div
            className="wb-cs-float wb-cs-deco"
            style={{
              position: "absolute",
              bottom: "60px",
              right: "-6px",
              animation: "wbCsFloatC 6.6s ease-in-out 0.7s infinite",
            }}
          >
            <svg
              width="62"
              height="62"
              viewBox="0 0 72 72"
              fill="none"
              stroke={GOUD}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.7"
              aria-hidden="true"
            >
              <g
                className="wb-cs-float"
                style={{
                  animation: "wbSpin360 46s linear infinite",
                  transformOrigin: "36px 36px",
                }}
              >
                <circle cx="36" cy="36" r="26"></circle>
                <circle cx="36" cy="36" r="19" opacity="0.5"></circle>
                <path d="M36 17 v38 M17 36 h38 M23 23 l26 26 M49 23 l-26 26" opacity="0.5"></path>
              </g>
            </svg>
          </div>
          <div
            className="wb-cs-float wb-cs-deco"
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "34px",
              animation: "wbCsFloatA 8s ease-in-out 1.2s infinite",
            }}
          >
            <svg
              width="46"
              height="56"
              viewBox="0 0 54 66"
              fill="none"
              stroke={GOUD}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
              aria-hidden="true"
            >
              <circle cx="24" cy="46" r="12" fill={GOUD_ZACHT}></circle>
              <path d="M24 34 q2 -18 20 -26"></path>
              <path d="M44 8 q-8 0 -10 8 q8 2 10 -8 Z" fill={GOUD_ZACHT}></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        className="wb-cs-strip"
        style={{
          position: "relative",
          zIndex: 10,
          borderTop: "1px solid oklch(0.8 0.105 85 / 0.12)",
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          fontSize: "12px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "oklch(0.93 0.02 85 / 0.45)",
        }}
      >
        <span>Enkhuizen</span>
        <Ster width="10" height="10" fill={GOUD} />
        <span>Werkzaam door heel Nederland</span>
        <Ster width="10" height="10" fill={GOUD} />
        <span>Sinds 2014</span>
      </div>

      <button
        type="button"
        onClick={onEnter}
        title="Bekijk website"
        aria-label="Bekijk website"
        className="wb-cs-secret"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "oklch(0.93 0.02 85 / 0.12)",
          zIndex: 50,
          transition: "all 0.3s",
          display: "block",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <Ster width="16" height="16" fill="currentColor" />
      </button>
    </div>
  );
}
