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
        
        <p className="text-xl md:text-2xl text-cream/90 mb-4 font-medium">
          Wandering Bar wordt momenteel opgebouwd.
        </p>
        
        <p className="text-lg text-cream/70 leading-relaxed mb-10">
          Wat leuk dat je ons al zoekt! We <i>shaken</i> de website nog even flink door elkaar om de perfecte mix voor je klaar te zetten. 🍸
        </p>

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
