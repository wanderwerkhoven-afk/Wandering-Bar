import { useEffect } from "react";
import type { RefObject } from "react";
import { bodyKleuren, type Thema } from "./themePalette";

const EASE = "cubic-bezier(0.22,1,0.36,1)";
const SPRINGY = "cubic-bezier(0.16,1,0.3,1)";

/** Het design draait op de prop "animaties"; wij koppelen die aan prefers-reduced-motion. */
export function geenAnimatie(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function alle<T extends Element>(root: Element, selector: string): T[] {
  return Array.from(root.querySelectorAll<T>(selector));
}

/**
 * Titel per view: coming soon en de website hebben in het design elk hun eigen titel.
 * De route-title in index.tsx blijft de fallback voor de eerste server-render.
 */
export function useDocumentTitel(titel: string): void {
  useEffect(() => {
    document.title = titel;
  }, [titel]);
}

/**
 * Hero-intro met de Web Animations API: letter-voor-letter, script-clip, badge-pop,
 * hero-fades en de arch-reveal. Keyframes, delays en easings uit het design-script.
 */
export function useHeroIntro(rootRef: RefObject<HTMLDivElement | null>): void {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || geenAnimatie()) return;

    const animaties: Animation[] = [];
    const letters = alle<HTMLElement>(root, "[data-lt]");
    letters.forEach((letter, i) => {
      animaties.push(
        letter.animate(
          [
            { transform: "translateY(112%) rotate(6deg)", opacity: 0 },
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
          ],
          { duration: 900, delay: 160 + i * 42, easing: SPRINGY, fill: "backwards" },
        ),
      );
    });

    const script = root.querySelector<HTMLElement>("[data-scriptin]");
    if (script) {
      animaties.push(
        script.animate(
          [
            { opacity: 0, clipPath: "inset(-25% 100% -35% 0)" },
            { opacity: 1, clipPath: "inset(-25% -10% -35% 0)" },
          ],
          {
            duration: 850,
            delay: 160 + letters.length * 42 + 180,
            easing: "cubic-bezier(0.4,0,0.2,1)",
            fill: "backwards",
          },
        ),
      );
    }

    const badge = root.querySelector<HTMLElement>("[data-badge]");
    if (badge) {
      animaties.push(
        badge.animate(
          [
            { opacity: 0, transform: "scale(0.6) translateY(10px)" },
            { opacity: 1, transform: "scale(1.05) translateY(0)", offset: 0.7 },
            { opacity: 1, transform: "scale(1)" },
          ],
          { duration: 650, delay: 80, easing: SPRINGY, fill: "backwards" },
        ),
      );
    }

    alle<HTMLElement>(root, "[data-hero-fade]").forEach((fade, i) => {
      animaties.push(
        fade.animate(
          [
            { opacity: 0, transform: "translateY(26px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 950, delay: 620 + i * 140, easing: SPRINGY, fill: "backwards" },
        ),
      );
    });

    const arch = root.querySelector<HTMLElement>("[data-hero-arch]");
    if (arch) {
      animaties.push(
        arch.animate(
          [
            { opacity: 0, transform: "scale(1.06) translateY(14px)" },
            { opacity: 1, transform: "scale(1) translateY(0)" },
          ],
          { duration: 1400, delay: 250, easing: SPRINGY, fill: "backwards" },
        ),
      );
    }

    return () => animaties.forEach((a) => a.cancel());
  }, [rootRef]);
}

/** data-reveal: IntersectionObserver met threshold 0.12 en per-element delay. */
export function useReveals(rootRef: RefObject<HTMLDivElement | null>): void {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elementen = alle<HTMLElement>(root, "[data-reveal]");
    elementen.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 1s ${EASE}, transform 1s ${EASE}`;
      el.style.transitionDelay = `${parseInt(el.getAttribute("data-reveal") || "0", 10)}ms`;
    });

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "none";
          io.unobserve(el);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elementen.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef]);
}

/** data-count: 1700ms ease-out cubic, met optionele decimaal en suffix. */
export function useCountUp(rootRef: RefObject<HTMLDivElement | null>): void {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const frames = new Set<number>();
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          const doel = parseFloat(el.getAttribute("data-count") || "0");
          const decimaal = el.getAttribute("data-dec") === "1";
          const suffix = el.getAttribute("data-suffix") || "";
          const start = performance.now();
          const duur = 1700;
          const tick = (nu: number) => {
            const p = Math.min(1, (nu - start) / duur);
            const e = 1 - Math.pow(1 - p, 3);
            const v = doel * e;
            el.textContent = (decimaal ? v.toFixed(1) : String(Math.round(v))) + suffix;
            if (p < 1) frames.add(requestAnimationFrame(tick));
          };
          frames.add(requestAnimationFrame(tick));
        }),
      { threshold: 0.6 },
    );
    alle<HTMLElement>(root, "[data-count]").forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      frames.forEach((id) => cancelAnimationFrame(id));
    };
  }, [rootRef]);
}

/** Muis-parallax binnen de hero op de data-para factoren. */
export function useParallax(
  rootRef: RefObject<HTMLDivElement | null>,
  heroRef: RefObject<HTMLElement | null>,
): void {
  useEffect(() => {
    const root = rootRef.current;
    const hero = heroRef.current;
    if (!root || !hero) return;

    const lagen = alle<HTMLElement>(root, "[data-para]");
    if (geenAnimatie()) {
      lagen.forEach((el) => {
        el.style.translate = "0px 0px";
      });
      return;
    }

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dx = (e.clientX - w / 2) / w;
      const dy = (e.clientY - h / 2) / h;
      lagen.forEach((el) => {
        const f = parseFloat(el.getAttribute("data-para") || "0");
        el.style.translate = `${(-dx * f).toFixed(1)}px ${(-dy * f).toFixed(1)}px`;
      });
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, [rootRef, heroRef]);
}

/** Bij prefers-reduced-motion staan alle CSS-animaties op paused, net als het animaties=false pad. */
export function usePauzeerCssAnimaties(rootRef: RefObject<HTMLDivElement | null>): void {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !geenAnimatie()) return;
    alle<HTMLElement | SVGElement>(root, "[data-anim]").forEach((el) => {
      el.style.animationPlayState = "paused";
    });
  }, [rootRef]);
}

/** Het design zet de themakleuren ook op de body; wij draaien dat terug bij unmount. */
export function useBodyThema(thema: Thema): void {
  useEffect(() => {
    const { bg, tekst } = bodyKleuren(thema);
    const body = document.body;
    const vorigeBg = body.style.background;
    const vorigeKleur = body.style.color;
    body.style.background = bg;
    body.style.color = tekst;
    return () => {
      body.style.background = vorigeBg;
      body.style.color = vorigeKleur;
    };
  }, [thema]);
}
