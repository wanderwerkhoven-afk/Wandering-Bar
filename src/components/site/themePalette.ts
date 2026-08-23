/**
 * Volledige CSS-variabelenpaletten uit "Redesign - Website.dc.html" (design-script
 * regels 800-846). Goudtint is vastgezet op Champagne, conform het change-contract.
 */

import type { CSSProperties } from "react";

export type Thema = "licht" | "donker";

export const THEMA_OPSLAG_KEY = "wb-thema";

type VarMap = Record<string, string>;

/** Champagne in donkere weergave, ook de bron voor de --goud-vast* varianten. */
const CHAMPAGNE_DONKER = [
  "oklch(0.8 0.105 85)",
  "oklch(0.8 0.105 85 / 0.35)",
  "oklch(0.8 0.105 85 / 0.14)",
] as const;

/** Champagne in lichte weergave. */
const CHAMPAGNE_LICHT = [
  "oklch(0.56 0.115 78)",
  "oklch(0.56 0.115 78 / 0.5)",
  "oklch(0.56 0.115 78 / 0.16)",
] as const;

const PALET_LICHT: VarMap = {
  bg: "oklch(0.965 0.018 85)",
  hdr: "oklch(0.97 0.015 85 / 0.85)",
  ink: "oklch(0.25 0.03 50)",
  tekst: "oklch(0.28 0.03 50)",
  tx85: "oklch(0.25 0.03 50 / 0.88)",
  tx80: "oklch(0.25 0.03 50 / 0.8)",
  tx75: "oklch(0.25 0.03 50 / 0.76)",
  tx72: "oklch(0.25 0.03 50 / 0.74)",
  tx68: "oklch(0.25 0.03 50 / 0.7)",
  tx65: "oklch(0.25 0.03 50 / 0.68)",
  tx60: "oklch(0.25 0.03 50 / 0.62)",
  tx55: "oklch(0.25 0.03 50 / 0.6)",
  tx50: "oklch(0.25 0.03 50 / 0.55)",
  tx45: "oklch(0.25 0.03 50 / 0.52)",
  kaart: "oklch(0.995 0.007 90 / 0.85)",
  veld: "oklch(1 0 0 / 0.6)",
  "veld-rand": "oklch(0.25 0.03 50 / 0.16)",
  placeholder: "oklch(0.25 0.03 50 / 0.42)",
  strip: "oklch(0.995 0.01 90 / 0.65)",
  "glow-a": "oklch(0.9 0.06 70 / 0.85)",
  "glow-b": "oklch(0.94 0.05 100 / 0.8)",
  "glow-c": "oklch(0.93 0.045 80 / 0.6)",
  schaduw: "oklch(0.35 0.055 60 / 0.3)",
  "rand-knop": "oklch(0.25 0.03 50 / 0.3)",
  "sec-bg": "oklch(0.93 0.03 83)",
  "sec-card": "oklch(0.995 0.006 90)",
  "sec-badge": "oklch(0.995 0.008 88 / 0.94)",
  "op-goud": "oklch(0.985 0.012 88)",
};

const PALET_DONKER: VarMap = {
  bg: "oklch(0.15 0.018 50)",
  hdr: "oklch(0.15 0.018 50 / 0.82)",
  ink: "oklch(0.95 0.02 85)",
  tekst: "oklch(0.93 0.02 85)",
  tx85: "oklch(0.93 0.02 85 / 0.85)",
  tx80: "oklch(0.93 0.02 85 / 0.8)",
  tx75: "oklch(0.93 0.02 85 / 0.75)",
  tx72: "oklch(0.93 0.02 85 / 0.72)",
  tx68: "oklch(0.93 0.02 85 / 0.68)",
  tx65: "oklch(0.93 0.02 85 / 0.65)",
  tx60: "oklch(0.95 0.02 85 / 0.6)",
  tx55: "oklch(0.93 0.02 85 / 0.55)",
  tx50: "oklch(0.93 0.02 85 / 0.5)",
  tx45: "oklch(0.93 0.02 85 / 0.45)",
  kaart: "oklch(0.17 0.02 52 / 0.6)",
  veld: "oklch(0.14 0.016 50 / 0.6)",
  "veld-rand": "oklch(0.93 0.02 85 / 0.12)",
  placeholder: "oklch(0.93 0.02 85 / 0.35)",
  strip: "oklch(0.13 0.016 50 / 0.6)",
  "glow-a": "oklch(0.22 0.035 60 / 0.9)",
  "glow-b": "oklch(0.19 0.03 45 / 0.8)",
  "glow-c": "oklch(0.19 0.025 55 / 0.7)",
  schaduw: "oklch(0 0 0 / 0.65)",
  "rand-knop": "oklch(0.93 0.02 85 / 0.25)",
  "sec-bg": "oklch(0.95 0.025 85)",
  "sec-card": "oklch(0.975 0.018 85)",
  "sec-badge": "oklch(0.95 0.025 85 / 0.92)",
  "op-goud": "oklch(0.15 0.018 50)",
};

/** Achtergrond- en tekstkleur die het design op de body zet. */
export function bodyKleuren(thema: Thema): { bg: string; tekst: string } {
  const palet = thema === "licht" ? PALET_LICHT : PALET_DONKER;
  return { bg: palet.bg, tekst: palet.tekst };
}

/** Alle custom properties voor de site-wrapper, inclusief goud en goud-vast. */
export function themaVariabelen(thema: Thema): CSSProperties {
  const licht = thema === "licht";
  const palet = licht ? PALET_LICHT : PALET_DONKER;
  const goud = licht ? CHAMPAGNE_LICHT : CHAMPAGNE_DONKER;

  const vars: VarMap = {
    "--goud-vast": CHAMPAGNE_DONKER[0],
    "--goud-vast-soft": CHAMPAGNE_DONKER[1],
    "--goud-vast-glow": CHAMPAGNE_DONKER[2],
    "--goud": goud[0],
    "--goud-soft": goud[1],
    "--goud-glow": goud[2],
  };
  for (const [naam, waarde] of Object.entries(palet)) {
    vars[`--${naam}`] = waarde;
  }
  return vars as CSSProperties;
}
