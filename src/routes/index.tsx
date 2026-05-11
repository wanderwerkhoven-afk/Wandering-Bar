import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-bartender.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wandering Bar — Binnenkort online" },
    ],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  return (
    <div className="min-h-screen bg-espresso text-cream flex flex-col items-center justify-center relative overflow-hidden">
      <img
        src={heroImg}
        alt="Achtergrond"
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/90" />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-cream mb-8 leading-[1.05]">
          Wandering<br />
          <span className="italic text-champagne">Bar</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-champagne mb-6 font-display italic">
          Achter de schermen zijn we druk aan het shaken.
        </h2>
        
        <div className="space-y-4 text-lg md:text-xl text-cream/80 leading-relaxed mb-10 max-w-xl">
          <p>
            Terwijl de cocktails worden getest, de glazen gepolijst en de laatste details worden gemixt, werken wij hard aan een nieuwe online beleving vol sfeer, cocktails en hospitality.
          </p>
          <p>
            Binnenkort vind je hier alles over onze cocktail catering, workshops, wijnbars en speciaalbierbars op locatie.
          </p>
        </div>

        <a
          href="mailto:info@wanderingbar.nl"
          className="inline-flex items-center gap-3 rounded-full bg-copper px-8 py-4 text-sm font-medium text-cream shadow-glow hover:bg-amber-glow transition-colors"
        >
          Neem alvast contact op
        </a>
      </div>
    </div>
  );
}
