import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, Menu, X } from "lucide-react";

const nav = [
  { label: "Cocktailbars", href: "#bars" },
  { label: "Diensten", href: "#diensten" },
  { label: "Events", href: "#events" },
  { label: "Over ons", href: "#over" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Main bar */}
        <div
          className={`transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <span
                className={`font-display text-2xl tracking-tight ${
                  scrolled ? "text-espresso" : "text-cream"
                }`}
              >
                Wandering<span className="text-copper">Bar</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-9">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wide transition-colors ${
                    scrolled ? "text-espresso/80 hover:text-copper" : "text-cream/90 hover:text-champagne"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center rounded-full bg-copper px-5 py-2.5 text-sm font-medium text-cream shadow-soft hover:bg-amber-glow transition-colors"
              >
                Vraag offerte aan
              </a>
              <button
                onClick={() => setOpen(!open)}
                className={`lg:hidden p-2 rounded-md ${scrolled ? "text-espresso" : "text-cream"}`}
                aria-label="Menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden glass border-t border-border">
              <div className="px-6 py-6 flex flex-col gap-4">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-espresso text-base"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex justify-center items-center rounded-full bg-copper px-5 py-3 text-sm font-medium text-cream"
                >
                  Vraag offerte aan
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Bottom Sticky Bar (Contact Info) */}
      <div className="fixed inset-x-0 bottom-0 z-40 hidden md:block">
        <div className="glass-dark border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between text-xs tracking-wide text-cream/80">
            <div className="flex items-center gap-8">
              <a href="tel:+31610332492" className="inline-flex items-center gap-2 hover:text-copper transition-colors">
                <Phone className="h-3.5 w-3.5 text-copper" /> +31 (0)6 10 33 24 92
              </a>
              <a href="mailto:info@wanderingbar.nl" className="inline-flex items-center gap-2 hover:text-copper transition-colors">
                <Mail className="h-3.5 w-3.5 text-copper" /> info@wanderingbar.nl
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="uppercase opacity-50">Mobiele cocktailbar · Sinds 2014</span>
              <div className="h-1 w-1 rounded-full bg-copper" />
              <span className="text-copper">Nu beschikbaar voor boekingen</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
