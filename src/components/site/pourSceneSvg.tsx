import type { RefObject } from "react";

type Props = {
  svgRef: RefObject<SVGSVGElement | null>;
  width: number;
  height: number;
  /** Kleur voor stroke en fills: een CSS-var op de site, een vaste kleur op coming soon. */
  goud: string;
  /** De coming soon variant heeft drie extra twinkle-sterren. */
  metTwinkles?: boolean;
};

/** De shaker-pour SVG uit het design. De choreografie zit in pourScene.ts. */
export function PourSceneSvg({ svgRef, width, height, goud, metTwinkles = false }: Props) {
  return (
    <svg
      ref={svgRef}
      data-pour-scene
      width={width}
      height={height}
      viewBox="0 0 320 520"
      fill="none"
      stroke={goud}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="wbBowlIn">
          <path d="M104 351 q0 44 56 44 q56 0 56 -44 Z"></path>
        </clipPath>
        <clipPath id="wbStreamClip">
          <rect data-stream-rect x="138" y="238" width="34" height="0"></rect>
        </clipPath>
      </defs>
      <g data-sh transform="translate(95,132) rotate(-8)">
        <g data-sh-in>
          <g data-cap>
            <path d="M-15 -12 h30 l3 12 h-36 Z"></path>
            <rect x="-9" y="-27" width="18" height="15" rx="3"></rect>
          </g>
          <path d="M-24 0 L-17 96 Q-16 104 -8 104 L8 104 Q16 104 17 96 L24 0 Z"></path>
          <path d="M-24 0 h48"></path>
          <path d="M-20 16 h40" opacity="0.4"></path>
          <g data-ml-l opacity="0">
            <path d="M-36 32 q-7 12 0 24"></path>
            <path d="M-45 26 q-10 16 0 34"></path>
          </g>
          <g data-ml-r opacity="0">
            <path d="M36 32 q7 12 0 24"></path>
            <path d="M45 26 q10 16 0 34"></path>
          </g>
        </g>
      </g>
      <path
        data-shake-spark
        d="M156 58 l4 8 l8 4 l-8 4 l-4 8 l-4 -8 l-8 -4 l8 -4 Z"
        fill={goud}
        stroke="none"
        opacity="0"
      ></path>
      <path
        data-shake-spark
        d="M30 150 l3 6 l6 3 l-6 3 l-3 6 l-3 -6 l-6 -3 l6 -3 Z"
        fill={goud}
        stroke="none"
        opacity="0"
      ></path>
      <g clipPath="url(#wbStreamClip)">
        <path
          d="M145 240 C148.5 272 156 305 156.5 350 L164 350 C162 300 158 270 155 240 Z"
          fill={goud}
          stroke="oklch(0.5 0.09 70 / 0.5)"
          strokeWidth="1"
          opacity="1"
        ></path>
      </g>
      <circle data-drop cx="155" cy="260" r="3" fill={goud} stroke="none" opacity="0"></circle>
      <g clipPath="url(#wbBowlIn)">
        <g data-content opacity="0">
          <rect
            data-liq
            x="100"
            y="396"
            width="124"
            height="0"
            fill={goud}
            opacity="0.85"
            stroke="none"
          ></rect>
          <ellipse
            data-surface
            cx="160"
            cy="396"
            rx="30"
            ry="4.5"
            fill="oklch(0.98 0.01 85 / 0.4)"
            stroke="none"
          ></ellipse>
          <ellipse
            data-ripple
            cx="160"
            cy="356"
            rx="0"
            ry="0"
            stroke="oklch(0.98 0.01 85 / 0.8)"
            strokeWidth="1.5"
            fill="none"
            opacity="0"
          ></ellipse>
          <circle
            data-bub
            cx="146"
            cy="390"
            r="2.3"
            fill="oklch(0.98 0.01 85 / 0.7)"
            stroke="none"
            opacity="0"
          ></circle>
          <circle
            data-bub
            cx="162"
            cy="390"
            r="1.7"
            fill="oklch(0.98 0.01 85 / 0.7)"
            stroke="none"
            opacity="0"
          ></circle>
          <circle
            data-bub
            cx="176"
            cy="390"
            r="2"
            fill="oklch(0.98 0.01 85 / 0.7)"
            stroke="none"
            opacity="0"
          ></circle>
          <rect
            data-shine
            x="120"
            y="344"
            width="12"
            height="58"
            fill="oklch(1 0 0 / 0.4)"
            stroke="none"
            opacity="0"
          ></rect>
        </g>
      </g>
      <g data-splash>
        <circle data-spl cx="160" cy="349" r="1.6" fill={goud} stroke="none" opacity="0"></circle>
        <circle data-spl cx="160" cy="349" r="2.1" fill={goud} stroke="none" opacity="0"></circle>
        <circle data-spl cx="160" cy="349" r="1.4" fill={goud} stroke="none" opacity="0"></circle>
      </g>
      <g data-cherry opacity="0" transform="translate(160,280)">
        <circle r="7" fill="oklch(0.55 0.18 25)" stroke="none"></circle>
        <path d="M0 -7 q3 -12 13 -16" stroke="oklch(0.6 0.09 130)" strokeWidth="2"></path>
      </g>
      <path
        data-ping
        d="M178 334 l3 6 l6 3 l-6 3 l-3 6 l-3 -6 l-6 -3 l6 -3 Z"
        fill={goud}
        stroke="none"
        opacity="0"
        style={{ transformOrigin: "178px 343px" }}
      ></path>
      <path d="M102 350 q0 46 58 46 q58 0 58 -46"></path>
      <path d="M102 350 h116"></path>
      <path d="M160 396 v52"></path>
      <path d="M126 452 h68"></path>
      {metTwinkles && (
        <>
          <path
            data-anim
            className="wb-cs-float"
            d="M240 96 l5 10 l10 5 l-10 5 l-5 10 l-5 -10 l-10 -5 l10 -5 Z"
            fill={goud}
            stroke="none"
            style={{
              transformOrigin: "240px 111px",
              animation: "wbTwinkle 3s ease-in-out infinite",
            }}
          ></path>
          <path
            data-anim
            className="wb-cs-float"
            d="M52 230 l4 8 l8 4 l-8 4 l-4 8 l-4 -8 l-8 -4 l8 -4 Z"
            fill={goud}
            stroke="none"
            style={{
              transformOrigin: "52px 242px",
              animation: "wbTwinkle 4.4s ease-in-out 1.4s infinite",
            }}
          ></path>
          <path
            data-anim
            className="wb-cs-float"
            d="M262 300 l3.4 7 l7 3.4 l-7 3.4 l-3.4 7 l-3.4 -7 l-7 -3.4 l7 -3.4 Z"
            fill={goud}
            stroke="none"
            style={{
              transformOrigin: "262px 310px",
              animation: "wbTwinkle 3.8s ease-in-out 0.8s infinite",
            }}
          ></path>
        </>
      )}
    </svg>
  );
}
