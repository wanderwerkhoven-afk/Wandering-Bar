import { useEffect, useRef } from "react";

/**
 * Scroll-widget rechtsonder: het glas vult mee met de scrollvoortgang, de kers valt
 * erin voorbij 96.5% en het geheel verschijnt na 350px. Uit de design-HTML.
 */
export function ScrollGlass() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const liquidRef = useRef<SVGRectElement>(null);
  const cherryRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const h = document.documentElement;
      const max = h.scrollHeight - window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, y / max));
      if (liquidRef.current) liquidRef.current.style.transform = `scaleY(${p.toFixed(3)})`;
      if (cherryRef.current) cherryRef.current.style.opacity = p > 0.965 ? "1" : "0";
      if (widgetRef.current) widgetRef.current.style.opacity = y > 350 ? "1" : "0";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={widgetRef}
      style={{
        position: "fixed",
        right: "26px",
        bottom: "24px",
        zIndex: 70,
        opacity: 0,
        transition: "opacity 0.6s",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <svg
        width="46"
        height="60"
        viewBox="0 0 64 84"
        fill="none"
        stroke="var(--goud, oklch(0.8 0.105 85))"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <defs>
          <clipPath id="wbBowlClip">
            <path d="M14 14 q0 24 18 24 q18 0 18 -24 l0 -2 h-36 Z"></path>
          </clipPath>
        </defs>
        <g clipPath="url(#wbBowlClip)">
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
    </div>
  );
}
