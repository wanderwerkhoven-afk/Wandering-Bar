import { PijlRechts } from "./siteIcons";

const GOUD_VAST = "var(--goud-vast, oklch(0.8 0.105 85))";
const GOUD_VAST_GLOW = "var(--goud-vast-glow, oklch(0.8 0.105 85 / 0.14))";
const CLINK_EASE = "cubic-bezier(0.34,0.05,0.26,1)";

export function ProostSection() {
  return (
    <section className="wb-sectie-proost" style={{ padding: "40px 28px 150px 28px" }}>
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: "32px",
          border: `1px solid ${GOUD_VAST_GLOW}`,
          background: `radial-gradient(700px 420px at 50% 115%, ${GOUD_VAST_GLOW}, transparent 70%), oklch(0.17 0.02 52)`,
        }}
      >
        <div
          className="wb-proost-binnen"
          style={{ position: "relative", padding: "110px 60px 120px 60px", textAlign: "center" }}
        >
          <div
            data-reveal="0"
            style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
          >
            <svg
              width="180"
              height="126"
              viewBox="0 0 170 120"
              fill="none"
              stroke={GOUD_VAST}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <g
                data-anim
                style={{
                  transformOrigin: "55px 112px",
                  animation: `wbClink2L 3.6s ${CLINK_EASE} infinite`,
                }}
              >
                <path d="M27 20 h56 v4 q0 24 -28 24 q-28 0 -28 -24 Z"></path>
                <g
                  data-anim
                  style={{
                    animation: `wbSlosh 3.6s ${CLINK_EASE} infinite`,
                    transformOrigin: "55px 30px",
                  }}
                >
                  <path
                    d="M31 26 h48 q0 18 -24 18 q-24 0 -24 -18 Z"
                    fill={GOUD_VAST_GLOW}
                    stroke="none"
                  ></path>
                </g>
                <path d="M55 48 v52"></path>
                <path d="M37 104 h36"></path>
              </g>
              <g
                data-anim
                style={{
                  transformOrigin: "115px 112px",
                  animation: `wbClink2R 3.6s ${CLINK_EASE} infinite`,
                }}
              >
                <path d="M87 20 h56 v4 q0 24 -28 24 q-28 0 -28 -24 Z"></path>
                <g
                  data-anim
                  style={{
                    animation: `wbSlosh 3.6s ${CLINK_EASE} 0.06s infinite`,
                    transformOrigin: "115px 30px",
                  }}
                >
                  <path
                    d="M91 26 h48 q0 18 -24 18 q-24 0 -24 -18 Z"
                    fill={GOUD_VAST_GLOW}
                    stroke="none"
                  ></path>
                </g>
                <path d="M115 48 v52"></path>
                <path d="M97 104 h36"></path>
              </g>
              <path
                data-anim
                d="M85 2 l3.4 8 l8 3.4 l-8 3.4 l-3.4 8 l-3.4 -8 l-8 -3.4 l8 -3.4 Z"
                fill={GOUD_VAST}
                stroke="none"
                style={{
                  transformOrigin: "85px 13px",
                  animation: `wbClinkSpark 3.6s ${CLINK_EASE} infinite`,
                }}
              ></path>
              <path
                data-anim
                d="M62 10 l2 4.5 l4.5 2 l-4.5 2 l-2 4.5 l-2 -4.5 l-4.5 -2 l4.5 -2 Z"
                fill={GOUD_VAST}
                stroke="none"
                style={{
                  transformOrigin: "62px 18px",
                  animation: `wbClinkSpark 3.6s ${CLINK_EASE} 0.08s infinite`,
                }}
              ></path>
            </svg>
          </div>
          <p
            data-reveal="60"
            style={{
              margin: 0,
              fontFamily: "'Yellowtail', cursive",
              fontSize: "66px",
              color: GOUD_VAST,
              lineHeight: 1,
              transform: "rotate(-2deg)",
            }}
          >
            Proost
          </p>
          <h2
            data-reveal="120"
            style={{
              margin: "22px auto 0 auto",
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              fontSize: "62px",
              lineHeight: 0.96,
              letterSpacing: "-0.01em",
              color: "oklch(0.95 0.02 85)",
              maxWidth: "860px",
            }}
          >
            Een cocktailbar op jouw event
          </h2>
          <p
            data-reveal="180"
            style={{
              margin: "24px auto 0 auto",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "oklch(0.93 0.02 85 / 0.68)",
              maxWidth: "520px",
            }}
          >
            Vertel ons over je gelegenheid en we ontwerpen samen de perfecte beleving.
          </p>
          <a
            data-reveal="240"
            href="#contact"
            className="wb-proost-knop"
            style={{
              marginTop: "44px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: GOUD_VAST,
              color: "oklch(0.15 0.018 50)",
              borderRadius: "999px",
              padding: "19px 36px",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.03em",
              transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              boxShadow: "0 18px 60px -18px var(--goud-vast-soft, oklch(0.8 0.105 85 / 0.55))",
            }}
          >
            Plan een vrijblijvend gesprek <PijlRechts width="17" height="17" />
          </a>
        </div>
      </div>
    </section>
  );
}
