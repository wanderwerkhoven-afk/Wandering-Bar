import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-3xl text-cream">
            Wandering<br />
            <span className="italic text-champagne">Bar</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            Luxe mobiele cocktailbars, catering en workshops voor onvergetelijke events in heel Nederland.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full border border-cream/15 flex items-center justify-center hover:bg-copper hover:border-copper transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-widest mb-5">Diensten</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#diensten" className="hover:text-copper">Cocktail catering</a></li>
            <li><a href="#diensten" className="hover:text-copper">Cocktail workshops</a></li>
            <li><a href="#diensten" className="hover:text-copper">Wijnbar</a></li>
            <li><a href="#diensten" className="hover:text-copper">Speciaalbier bar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-widest mb-5">Events</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#events" className="hover:text-copper">Bruiloften</a></li>
            <li><a href="#events" className="hover:text-copper">Bedrijfsevents</a></li>
            <li><a href="#events" className="hover:text-copper">Private dining</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-widest mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>Thuisbasis in Enkhuizen<br />Werkzaam door heel Nederland</li>
            <li><a href="tel:+31610332492" className="hover:text-copper">+31 (0)6 10 33 24 92</a></li>
            <li><a href="mailto:info@wanderingbar.nl" className="hover:text-copper">info@wanderingbar.nl</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Wandering Bar. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-copper">Privacy</a>
            <a href="#" className="hover:text-copper">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
