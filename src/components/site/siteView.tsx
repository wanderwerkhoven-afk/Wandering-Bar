import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HeroSection } from "./heroSection";
import { FilosofieSection } from "./filosofieSection";
import { BarsSection } from "./barsSection";
import { PijlersSection } from "./pijlersSection";
import { EventsSection } from "./eventsSection";
import { ProostSection } from "./proostSection";
import { OverSection } from "./overSection";
import { ReviewsSection } from "./reviewsSection";
import { ContactSection } from "./contactSection";
import { ScrollGlass } from "./scrollGlass";
import { ThemaContext } from "./themeContext";
import { THEMA_OPSLAG_KEY, themaVariabelen, type Thema } from "./themePalette";
import {
  useBodyThema,
  useCountUp,
  useDocumentTitel,
  useHeroIntro,
  useParallax,
  usePauzeerCssAnimaties,
  useReveals,
} from "./siteMotion";

/** De volledige website uit "Redesign - Website.dc.html". Donker is de standaard. */
export function SiteView() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [thema, setThema] = useState<Thema>("donker");

  useEffect(() => {
    try {
      const opgeslagen = localStorage.getItem(THEMA_OPSLAG_KEY);
      if (opgeslagen === "licht" || opgeslagen === "donker") setThema(opgeslagen);
    } catch {
      // localStorage kan geblokkeerd zijn; donker blijft dan de standaard
    }
  }, []);

  const wisselThema = useCallback(() => {
    setThema((huidig) => {
      const nieuw: Thema = huidig === "licht" ? "donker" : "licht";
      try {
        localStorage.setItem(THEMA_OPSLAG_KEY, nieuw);
      } catch {
        // voorkeur niet kunnen opslaan mag de wissel niet blokkeren
      }
      return nieuw;
    });
  }, []);

  useDocumentTitel("Wandering Bar · Cocktailbeleving op locatie");
  useHeroIntro(rootRef);
  useReveals(rootRef);
  useCountUp(rootRef);
  useParallax(rootRef, heroRef);
  usePauzeerCssAnimaties(rootRef);
  useBodyThema(thema);

  const themaWaarde = useMemo(() => ({ thema, wisselThema }), [thema, wisselThema]);

  return (
    <ThemaContext.Provider value={themaWaarde}>
      <div
        ref={rootRef}
        className="wb-root"
        style={{
          ...themaVariabelen(thema),
          minHeight: "100vh",
          background: "var(--bg, oklch(0.15 0.018 50))",
          color: "var(--tekst, oklch(0.93 0.02 85))",
          overflowX: "clip",
          transition: "background 0.5s ease, color 0.5s ease",
          fontFamily: "'Figtree', ui-sans-serif, system-ui, sans-serif",
          colorScheme: thema === "licht" ? "light" : "dark",
        }}
      >
        <Header />
        <HeroSection heroRef={heroRef} />
        <FilosofieSection />
        <BarsSection />
        <PijlersSection />
        <EventsSection />
        <ProostSection />
        <OverSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
        <ScrollGlass />
      </div>
    </ThemaContext.Provider>
  );
}
