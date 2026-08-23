import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useThema } from "./themeContext";
import { MaanIcon, ZonIcon } from "./siteIcons";

const nav = [
  { label: "Bars", href: "#bars" },
  { label: "Events", href: "#events" },
  { label: "Over ons", href: "#over" },
  { label: "Contact", href: "#contact" },
];

const rijStijl: CSSProperties = {
  boxSizing: "border-box",
  width: "100%",
  maxWidth: "1240px",
  margin: "0 auto",
  padding: "0 28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "24px",
};

function ThemaKnop() {
  const { thema, wisselThema } = useThema();
  const licht = thema === "licht";
  const bolStijl: CSSProperties = {
    width: "26px",
    height: "26px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.35s",
  };

  return (
    <button
      type="button"
      onClick={wisselThema}
      aria-label="Wissel tussen licht en donker thema"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "2px",
        border: "1.5px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.4))",
        background: "transparent",
        borderRadius: "999px",
        padding: "3px",
        cursor: "pointer",
        fontFamily: "inherit",
      }}
    >
      <span
        style={{
          ...bolStijl,
          background: licht ? "var(--goud)" : "transparent",
          color: licht ? "var(--op-goud)" : "var(--tx60)",
        }}
      >
        <ZonIcon width="13" height="13" />
      </span>
      <span
        style={{
          ...bolStijl,
          background: licht ? "transparent" : "var(--goud)",
          color: licht ? "var(--tx60)" : "var(--op-goud)",
        }}
      >
        <MaanIcon width="13" height="13" />
      </span>
    </button>
  );
}

function Logo() {
  return (
    <a href="#" style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
      <span
        style={{
          fontFamily: "'Grandstander', sans-serif",
          fontWeight: 900,
          fontSize: "25px",
          letterSpacing: "0.01em",
          textTransform: "uppercase",
          color: "var(--ink, oklch(0.95 0.02 85))",
        }}
      >
        Wandering
      </span>
      <span
        style={{
          fontFamily: "'Yellowtail', cursive",
          fontSize: "30px",
          color: "var(--goud, oklch(0.8 0.105 85))",
          transform: "rotate(-4deg)",
          display: "inline-block",
        }}
      >
        Bar
      </span>
    </a>
  );
}

function Navigatie() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "34px",
        fontSize: "15px",
        fontWeight: 600,
        letterSpacing: "0.04em",
      }}
    >
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="wb-nav-link"
          style={{ color: "var(--tx85, oklch(0.93 0.02 85 / 0.85))" }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function HeaderRij({ vast }: { vast: boolean }) {
  return (
    <div style={rijStijl}>
      <Logo />
      <Navigatie />
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <ThemaKnop />
        {vast ? (
          <a
            href="#contact"
            className="wb-knop-vast"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--goud, oklch(0.8 0.105 85))",
              color: "var(--op-goud, oklch(0.15 0.018 50))",
              borderRadius: "999px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Vraag offerte aan
          </a>
        ) : (
          <a
            href="#contact"
            className="wb-knop-rand"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1.5px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.4))",
              color: "var(--goud, oklch(0.8 0.105 85))",
              borderRadius: "999px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            Vraag offerte aan
          </a>
        )}
      </div>
    </div>
  );
}

export function Header() {
  const [solide, setSolide] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setSolide(y > 70);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", left: 0, right: 0, top: 0, zIndex: 80 }}>
      {/* Twee lagen uit het design. Alleen de zichtbare laag zit in de a11y-tree en
          is focusbaar, zodat nav en thema-knop niet dubbel voorkomen. */}
      <header
        aria-hidden={solide}
        inert={solide}
        style={{ height: "88px", display: "flex", alignItems: "center", background: "transparent" }}
      >
        <HeaderRij vast={false} />
      </header>
      <header
        aria-hidden={!solide}
        inert={!solide}
        style={{
          position: "absolute",
          inset: 0,
          height: "88px",
          display: "flex",
          alignItems: "center",
          background: "var(--hdr, oklch(0.15 0.018 50 / 0.82))",
          backdropFilter: "blur(18px) saturate(150%)",
          WebkitBackdropFilter: "blur(18px) saturate(150%)",
          borderBottom: "1px solid var(--goud-glow, oklch(0.8 0.105 85 / 0.12))",
          opacity: solide ? 1 : 0,
          pointerEvents: solide ? "auto" : "none",
          transition: "opacity 0.45s",
        }}
      >
        <HeaderRij vast={true} />
      </header>
    </div>
  );
}
