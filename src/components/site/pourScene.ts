/**
 * Port van het designbestand wb-scene.js: de gechoreografeerde shaker-pour scene
 * (13s loop). Fases: idle > shake (squash/stretch + motion lines) > settle > cap off
 * + move to pour pose > pour (stream + rising liquid + splashes) > stream detach +
 * last drop > return > cherry drop (squash, ripple, sparkle) > hold (bubbles, shine
 * sweep) > fade content > loop.
 *
 * De timing is identiek aan het origineel. De watchdog uit het origineel (bedoeld
 * voor rAF-throttling in embedded iframes) is niet overgenomen, zie change-contract.
 */

const LOOP = 13;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const ph = (t: number, a: number, b: number) => clamp((t - a) / (b - a), 0, 1);
const lerp = (a: number, b: number, p: number) => a + (b - a) * p;
const oc = (t: number) => 1 - Math.pow(1 - t, 3);
const ic = (t: number) => t * t * t;
const ioc = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const ob = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export type PourScene = {
  setPlaying: (spelen: boolean) => void;
  stop: () => void;
};

export function startPourScene(
  root: SVGSVGElement | null,
  opts: { autoplay?: boolean } = {},
): PourScene {
  if (!root) {
    return { setPlaying: () => {}, stop: () => {} };
  }
  const q = (s: string) => root.querySelector<SVGElement>(s);
  const qa = (s: string) => Array.from(root.querySelectorAll<SVGElement>(s));
  const el = {
    sh: q("[data-sh]"),
    shin: q("[data-sh-in]"),
    cap: q("[data-cap]"),
    mlL: q("[data-ml-l]"),
    mlR: q("[data-ml-r]"),
    srect: q("[data-stream-rect]"),
    drop: q("[data-drop]"),
    liq: q("[data-liq]"),
    surf: q("[data-surface]"),
    content: q("[data-content]"),
    spl: qa("[data-spl]"),
    cherry: q("[data-cherry]"),
    ripple: q("[data-ripple]"),
    ping: q("[data-ping]"),
    bub: qa("[data-bub]"),
    shine: q("[data-shine]"),
    spark: qa("[data-shake-spark]"),
  };
  const REST = { x: 95, y: 132, r: -8 };
  const POUR = { x: 150, y: 232, r: -140 };

  function render(t: number) {
    // --- shaker pose ---
    let x = REST.x;
    let y = REST.y;
    let ang = REST.r;
    let sx = 1;
    let sy = 1;
    let ml = 0;
    let mlPhase = 0;
    const bob = 2.2 * Math.sin(t * Math.PI * 2 * 0.22);
    if (t < 1.1) {
      ang = REST.r + 2.2 * Math.sin(t * 3);
    } else if (t < 4.1) {
      const ts = t - 1.1;
      const env = oc(ph(ts, 0, 0.4)) * (1 - ic(ph(ts, 2.45, 3.0)));
      ang = REST.r + 16 * env * Math.sin(ts * Math.PI * 2 * 6.5);
      x += 2.4 * env * Math.sin(ts * Math.PI * 2 * 13 + 1.7);
      y += 1.8 * env * Math.cos(ts * Math.PI * 2 * 11);
      sy = 1 + 0.05 * env * Math.sin(ts * Math.PI * 2 * 13);
      sx = 2 - sy;
      ml = env;
      mlPhase = Math.sin(ts * Math.PI * 2 * 6.5);
    } else if (t < 4.9) {
      const tp = t - 4.1;
      ang = REST.r + 12 * Math.exp(-4 * tp) * Math.sin(tp * 14);
    } else if (t < 5.7) {
      const p = ph(t, 4.9, 5.7);
      ang = p < 0.28 ? lerp(REST.r, 9, oc(p / 0.28)) : lerp(9, POUR.r, ioc((p - 0.28) / 0.72));
      const p2 = ioc(ph(p, 0.25, 1));
      x = lerp(REST.x, POUR.x, p2);
      y = lerp(REST.y, POUR.y, p2) - 36 * Math.sin(Math.PI * p2);
    } else if (t < 8.8) {
      x = POUR.x;
      y = POUR.y;
      ang = POUR.r + 1.6 * Math.sin(t * Math.PI * 2 * 0.8);
    } else if (t < 9.6) {
      const p = ioc(ph(t, 8.8, 9.6));
      ang = lerp(POUR.r, REST.r, p);
      x = lerp(POUR.x, REST.x, p);
      y = lerp(POUR.y, REST.y, p) - 30 * Math.sin(Math.PI * p);
    } else {
      const tp = t - 9.6;
      ang = REST.r + 5 * Math.exp(-3 * tp) * Math.sin(tp * 9) + 1.8 * Math.sin(t * 1.4);
    }
    el.sh?.setAttribute(
      "transform",
      `translate(${x.toFixed(2)},${(y + bob).toFixed(2)}) rotate(${ang.toFixed(2)})`,
    );
    el.shin?.setAttribute(
      "transform",
      `translate(0,55) scale(${sx.toFixed(3)},${sy.toFixed(3)}) translate(0,-55)`,
    );
    if (el.mlL) el.mlL.style.opacity = (ml * clamp(0.5 + 0.6 * mlPhase, 0, 1)).toFixed(2);
    if (el.mlR) el.mlR.style.opacity = (ml * clamp(0.5 - 0.6 * mlPhase, 0, 1)).toFixed(2);
    el.spark.forEach((s, i) => {
      const on = t > 1.3 && t < 3.9 ? 0.4 + 0.6 * Math.abs(Math.sin(t * 7 + i * 2.1)) : 0;
      s.style.opacity = on.toFixed(2);
    });
    // --- cap off during pour ---
    if (el.cap) {
      const off = ph(t, 5.0, 5.55) - ph(t, 9.0, 9.5);
      el.cap.setAttribute(
        "transform",
        `translate(${(-46 * off).toFixed(1)},${(-26 * off).toFixed(1)}) rotate(${(-30 * off).toFixed(1)})`,
      );
      el.cap.style.opacity = (1 - off).toFixed(2);
    }
    // --- stream ---
    const bottom = lerp(240, 350, ic(ph(t, 5.9, 6.25)));
    const top = t < 8.5 ? 240 : lerp(240, 350, ic(ph(t, 8.5, 8.8)));
    if (el.srect) {
      el.srect.setAttribute("y", top.toFixed(1));
      el.srect.setAttribute("height", Math.max(0, bottom - top).toFixed(1));
    }
    if (el.drop) {
      const dp = ph(t, 8.78, 9.04);
      el.drop.setAttribute("cy", lerp(250, 346, ic(dp)).toFixed(1));
      el.drop.style.opacity = t > 8.78 && t < 9.02 ? "1" : "0";
    }
    // --- liquid level ---
    const lv = ioc(ph(t, 6.0, 8.4));
    const bump = t > 10.05 ? 2.2 * Math.exp(-5 * (t - 10.05)) : 0;
    const h = 2 + 38 * lv + bump;
    if (el.liq) {
      el.liq.setAttribute("y", (396 - h).toFixed(1));
      el.liq.setAttribute("height", h.toFixed(1));
    }
    if (el.surf) {
      el.surf.setAttribute("cy", (396 - h).toFixed(1));
      el.surf.setAttribute("rx", clamp(16 + 40 * (h / 42), 0, 55).toFixed(1));
    }
    const fade = 1 - ph(t, 12.5, 12.95);
    if (el.content) el.content.style.opacity = (t > 6.0 ? fade : 0).toFixed(2);
    // --- splashes at rim while pouring ---
    el.spl.forEach((s, i) => {
      if (t > 6.05 && t < 8.45) {
        const local = ((t - 6.05 + i * 0.18) % 0.55) / 0.55;
        const dir = i === 1 ? -1 : 1;
        s.setAttribute("cx", (160 + dir * (4 + 11 * local) * (1 + i * 0.25)).toFixed(1));
        s.setAttribute("cy", (349 - 11 * local + 19 * local * local).toFixed(1));
        s.style.opacity = ((1 - local) * 0.75).toFixed(2);
      } else {
        s.style.opacity = "0";
      }
    });
    // --- cherry ---
    if (el.cherry) {
      let co = 0;
      let cy = 280;
      let csx = 1;
      let csy = 1;
      if (t >= 9.7 && t < 10.05) {
        co = 1;
        cy = lerp(272, 353, ic(ph(t, 9.7, 10.05)));
      } else if (t >= 10.05) {
        co = fade;
        const s2 = t - 10.05;
        csy = s2 < 0.32 ? lerp(0.62, 1, ob(ph(s2, 0, 0.32))) : 1;
        csx = 2 - csy;
        cy = 353 + (t > 10.4 ? 1.5 * Math.sin((t - 10.4) * Math.PI * 2 * 0.6) : 0);
      }
      el.cherry.style.opacity = co.toFixed(2);
      el.cherry.setAttribute(
        "transform",
        `translate(160,${cy.toFixed(1)}) scale(${csx.toFixed(3)},${csy.toFixed(3)})`,
      );
    }
    if (el.ripple) {
      const rp = ph(t, 10.05, 10.6);
      el.ripple.setAttribute("rx", (4 + 30 * rp).toFixed(1));
      el.ripple.setAttribute("ry", ((4 + 30 * rp) * 0.26).toFixed(1));
      el.ripple.setAttribute("cy", (396 - h + 1).toFixed(1));
      el.ripple.style.opacity = (rp > 0 && rp < 1 ? 0.65 * (1 - rp) : 0).toFixed(2);
    }
    if (el.ping) {
      const pp = ph(t, 10.08, 10.5);
      el.ping.style.opacity = (pp > 0 && pp < 1 ? Math.sin(Math.PI * pp) : 0).toFixed(2);
      el.ping.style.transform = `scale(${(0.4 + 0.8 * pp).toFixed(2)}) rotate(${(60 * pp).toFixed(0)}deg)`;
    }
    // --- hold: bubbles + shine ---
    el.bub.forEach((b, i) => {
      if (t > 10.3 && t < 12.5 && h > 20) {
        const p = ((t - 10.3) / 2.1 + i * 0.33) % 1;
        b.setAttribute("cy", (392 - 26 * p).toFixed(1));
        b.setAttribute("cx", (146 + 15 * i + 2 * Math.sin(t * 5 + i * 2)).toFixed(1));
        b.style.opacity = (Math.sin(Math.PI * p) * 0.65).toFixed(2);
      } else {
        b.style.opacity = "0";
      }
    });
    if (el.shine) {
      const sp = ph(t, 10.6, 11.7);
      el.shine.style.opacity = (Math.sin(Math.PI * sp) * 0.5).toFixed(2);
      el.shine.setAttribute(
        "transform",
        `translate(${lerp(-46, 60, ioc(sp)).toFixed(1)},0) rotate(16 160 370)`,
      );
    }
  }

  let raf: number | null = null;
  let playing = false;
  let startT = performance.now();

  function frame(nu: number) {
    render(((nu - startT) / 1000) % LOOP);
    raf = requestAnimationFrame(frame);
  }
  function start() {
    playing = true;
    startT = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function halt() {
    playing = false;
    if (raf !== null) cancelAnimationFrame(raf);
    raf = null;
  }
  function setPlaying(spelen: boolean) {
    if (spelen && !playing) start();
    if (!spelen && playing) {
      halt();
      render(11.2);
    }
  }
  if (opts.autoplay === false) render(11.2);
  else start();
  return { setPlaying, stop: halt };
}
