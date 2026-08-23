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

const ctaVastStijl: CSSProperties = {
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

/** Lijn-icoon in dezelfde taal als de rest van het design; alleen zichtbaar onder 900px. */
function BurgerKnop({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className="wb-burger"
      onClick={onClick}
      aria-label="Menu openen"
      aria-expanded={open}
      style={{
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        width: "44px",
        height: "44px",
        borderRadius: "999px",
        border: "1.5px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.4))",
        background: "transparent",
        color: "var(--goud, oklch(0.8 0.105 85))",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M1 1 h18"></path>
        <path d="M1 7 h18"></path>
        <path d="M1 13 h12"></path>
      </svg>
    </button>
  );
}

function MobielMenu({ onSluit }: { onSluit: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onSluit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onSluit]);

  return (
    <div
      className="wb-mobiel-menu"
      role="dialog"
      aria-label="Menu"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        background: "var(--hdr, oklch(0.15 0.018 50 / 0.82))",
        backdropFilter: "blur(22px) saturate(150%)",
        WebkitBackdropFilter: "blur(22px) saturate(150%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          height: "88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          borderBottom: "1px solid var(--goud-glow, oklch(0.8 0.105 85 / 0.12))",
        }}
      >
        <Logo />
        <button
          type="button"
          onClick={onSluit}
          aria-label="Menu sluiten"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "999px",
            border: "1.5px solid var(--goud-soft, oklch(0.8 0.105 85 / 0.4))",
            background: "transparent",
            color: "var(--goud, oklch(0.8 0.105 85))",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M2 2 l12 12"></path>
            <path d="M14 2 l-12 12"></path>
          </svg>
        </button>
      </div>

      <nav
        style={{
          boxSizing: "border-box",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 28px",
        }}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onSluit}
            className="wb-nav-link"
            style={{
              fontFamily: "'Grandstander', sans-serif",
              fontWeight: 800,
              textTransform: "uppercase",
              fontSize: "clamp(28px, 8vw, 38px)",
              letterSpacing: "0.01em",
              color: "var(--ink, oklch(0.95 0.02 85))",
              padding: "16px 0",
              borderBottom: "1px solid var(--goud-glow, oklch(0.8 0.105 85 / 0.12))",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div
        style={{
          boxSizing: "border-box",
          padding: "0 28px 40px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        <a
          href="#contact"
          onClick={onSluit}
          className="wb-knop-vast"
          style={{ ...ctaVastStijl, justifyContent: "center", padding: "16px 24px" }}
        >
          Vraag offerte aan
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "14px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--tx55, oklch(0.93 0.02 85 / 0.55))",
            }}
          >
            Thema
          </span>
          <ThemaKnop />
        </div>
      </div>
    </div>
  );
}

function HeaderRij({
  vast,
  menuOpen,
  onMenu,
}: {
  vast: boolean;
  menuOpen: boolean;
  onMenu: () => void;
}) {
  return (
    <div style={rijStijl}>
      <Logo />
      <nav
        className="wb-desktop-only"
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
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span
          className="wb-desktop-only"
          style={{ display: "flex", alignItems: "center", gap: "14px" }}
        >
          <ThemaKnop />
          {vast ? (
            <a href="#contact" className="wb-knop-vast" style={ctaVastStijl}>
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
        </span>
        <BurgerKnop open={menuOpen} onClick={onMenu} />
      </div>
    </div>
  );
}

export function Header() {
  const [solide, setSolide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <div style={{ position: "fixed", left: 0, right: 0, top: 0, zIndex: 80 }}>
        {/* Twee lagen uit het design. Alleen de zichtbare laag zit in de a11y-tree en
            is focusbaar, zodat nav en thema-knop niet dubbel voorkomen. */}
        <header
          aria-hidden={solide}
          inert={solide}
          style={{
            height: "88px",
            display: "flex",
            alignItems: "center",
            background: "transparent",
          }}
        >
          <HeaderRij vast={false} menuOpen={menuOpen} onMenu={() => setMenuOpen(true)} />
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
          <HeaderRij vast={true} menuOpen={menuOpen} onMenu={() => setMenuOpen(true)} />
        </header>
      </div>
      {menuOpen && <MobielMenu onSluit={() => setMenuOpen(false)} />}
    </>
  );
}
