import { useEffect, useId, useRef, useState } from "react";

/**
 * Scroll-widget rechtsonder: het glas vult mee met de scrollvoortgang, de kers valt
 * erin voorbij 96.5% en het geheel verschijnt na 350px. Daaromheen een roterende
 * "Boek ons nu!"-badge die naar #contact linkt. Uit de design-HTML + badge-spec.
 *
 * De zichtbaarheid loopt via state en niet via de DOM, zodat een verborgen badge
 * ook uit de tab-volgorde en de accessibility tree valt.
 */
export function ScrollGlass() {
  const liquidRef = useRef<SVGRectElement>(null);
  const cherryRef = useRef<SVGCircleElement>(null);
  const [zichtbaar, setZichtbaar] = useState(false);
  const idPrefix = useId();
  const ringId = `wbBadgeRing${idPrefix}`;
  const bowlId = `wbBowlClip${idPrefix}`;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const h = document.documentElement;
      const max = h.scrollHeight - window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, y / max));
      if (liquidRef.current) liquidRef.current.style.transform = `scaleY(${p.toFixed(3)})`;
      if (cherryRef.current) cherryRef.current.style.opacity = p > 0.965 ? "1" : "0";
      setZichtbaar(y > 350);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className="wb-badge"
      aria-label="Boek ons nu, ga naar het contactformulier"
      aria-hidden={!zichtbaar}
      tabIndex={zichtbaar ? undefined : -1}
      style={{
        position: "fixed",
        right: "26px",
        bottom: "24px",
        zIndex: 70,
        width: 110,
        height: 110,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "999px",
        background: "var(--hdr, oklch(0.15 0.018 50 / 0.82))",
        backdropFilter: "blur(16px) saturate(150%)",
        WebkitBackdropFilter: "blur(16px) saturate(150%)",
        border: "1px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.35))",
        boxShadow: "0 18px 44px -18px var(--schaduw, oklch(0 0 0 / 0.65))",
        opacity: zichtbaar ? 1 : 0,
        pointerEvents: zichtbaar ? "auto" : "none",
      }}
    >
      <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <path id={ringId} d="M 55 55 m -42 0 a 42 42 0 1 1 84 0 a 42 42 0 1 1 -84 0"></path>
        </defs>
        <g
          className="wb-badge-ring"
          data-anim
          style={{
            transformOrigin: "55px 55px",
          }}
        >
          <text
            style={{
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 700,
              fontSize: "10.5px",
              letterSpacing: "0.2em",
              fill: "var(--goud, oklch(0.8 0.105 85))",
              stroke: "none",
            }}
          >
            <textPath href={`#${ringId}`}>
              BOEK ONS NU! {"\u2726"} BOEK ONS NU! {"\u2726"}
            </textPath>
          </text>
        </g>
      </svg>
      <svg
        width="46"
        height="60"
        viewBox="0 0 64 84"
        fill="none"
        stroke="var(--goud, oklch(0.8 0.105 85))"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden="true"
        style={{ position: "relative" }}
      >
        <defs>
          <clipPath id={bowlId}>
            <path d="M14 14 q0 24 18 24 q18 0 18 -24 l0 -2 h-36 Z"></path>
          </clipPath>
        </defs>
        <g clipPath={`url(#${bowlId})`}>
          <rect
            ref={liquidRef}
            x="10"
            y="12"
            width="44"
            height="28"
            fill="var(--goud, oklch(0.8 0.105 85))"
            opacity="0.85"
            stroke="none"
            style={{
              transformOrigin: "32px 40px",
              transform: "scaleY(0)",
              transition: "transform 0.25s ease-out",
            }}
          ></rect>
        </g>
        <path d="M14 12 q0 26 18 26 q18 0 18 -26 l0 0 h-36 Z" fill="none"></path>
        <path d="M32 38 v30"></path>
        <path d="M18 72 h28"></path>
        <circle
          ref={cherryRef}
          cx="32"
          cy="20"
          r="5"
          fill="oklch(0.55 0.18 25)"
          stroke="none"
          style={{ opacity: 0, transition: "opacity 0.5s" }}
        ></circle>
      </svg>
    </a>
  );
}
