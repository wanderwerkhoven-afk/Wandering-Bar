import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Wine, Download, Quote, Star } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";

import heroImg from "@/assets/hero-bartender.jpg";
import storyImg from "@/assets/story-craft.jpg";
import brochureImg from "@/assets/brochure.jpg";
import cateringImg from "@/assets/cocktail-catering.jpg";
import workshopImg from "@/assets/cocktail-workshop.jpg";
import wineImg from "@/assets/wine-bar.jpg";
import beerImg from "@/assets/beer-bar.jpg";
import weddingImg from "@/assets/event-wedding.jpg";
import corporateImg from "@/assets/event-corporate.jpg";

import privateImg from "@/assets/event-private.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wandering Bar — Cocktailbeleving op locatie" },
      {
        name: "description",
        content:
          "Luxe mobiele cocktailbars, cocktail catering, workshops en speciale wijn- en speciaalbierbars voor bruiloften en bedrijfsevents.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Cocktail Workshops",
    desc: "Een interactieve en sfeervolle workshop waarin jouw gasten zelf leren shaken, proeven en garneren onder begeleiding van professionele bartenders. Perfect voor teamuitjes, verjaardagen en vrijgezellenfeesten.",
    img: workshopImg,
  },
  {
    title: "Cocktail Catering",
    desc: "Van stijlvolle signature cocktails tot complete mobiele cocktailbars: wij verzorgen een unieke cocktailervaring op locatie, volledig afgestemd op jouw event en gasten.",
    img: cateringImg,
  },
  {
    title: "Luxe Wijnbar",
    desc: "Een sfeervolle mobiele wijnbar met zorgvuldig geselecteerde wijnen, stijlvolle presentatie en persoonlijke service voor een ontspannen en luxe sfeer.",
    img: wineImg,
  },
  {
    title: "Speciaalbier Bar",
    desc: "Geniet van lichte hazy IPA's tot zware tripples. Een bar waar je de hele avond verschillende bieren kunt proeven, inclusief glazen, service en sfeervolle aankleding.",
    img: beerImg,
  },
];

const events = [
  { title: "Bruiloften", tagline: "Romantisch · Sfeervol · Elegant", img: weddingImg },
  { title: "Personeelsborrels", tagline: "Gezellig · Verbindend · Ontspannen", img: corporateImg },
  { title: "Tuinfeesten", tagline: "Zomers · Warm · Sfeervol", img: privateImg },
  { title: "Verjaardagen", tagline: "Feestelijk · Persoonlijk · Gezellig", img: heroImg },
  { title: "Workshops", tagline: "Interactief · Creatief · Sociaal", img: workshopImg },
  { title: "Bedrijfsevents", tagline: "Professioneel · Luxe · Gastvrij", img: corporateImg },
];

const reviews = [
  {
    quote:
      "Wandering Bar heeft onze bruiloft naar een hoger niveau getild. Sfeervol, vakkundig en gastvrij — onze gasten praten er nog steeds over.",
    name: "Sophie & Daan",
    type: "Bruiloft, Landgoed Duin & Kruidberg",
  },
  {
    quote:
      "Stijlvolle bar, top cocktails en een team dat écht weet wat hospitality is. Zeker een aanrader voor elk corporate event.",
    name: "Marleen V.",
    type: "Bedrijfsevent, Amsterdam",
  },
  {
    quote:
      "De workshop was de absolute hit van ons jubileum. Persoonlijk, leerzaam en ongelofelijk gezellig.",
    name: "Team Helder",
    type: "Private workshop",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Bartender schenkt cocktail op een luxe event"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/30 to-espresso/85" />
        <div className="relative mx-auto max-w-7xl w-full px-6 pb-24 pt-40">
          <p className="reveal text-champagne uppercase tracking-[0.3em] text-xs mb-6">
            Mobiele cocktailbar · Catering · Workshops
          </p>
          <h1 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl lg:text-8xl text-cream max-w-5xl text-balance leading-[1.05]">
            Wandering<br />
            <span className="italic text-champagne">Bar</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-xl text-cream/85 text-lg leading-relaxed">
            Cocktail catering, workshops en luxe mobiele barren voor elk event — van intieme borrels tot grootse bruiloften en bedrijfsevents.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-copper px-7 py-4 text-sm font-medium text-cream shadow-elegant hover:bg-amber-glow transition-colors"
            >
              Vraag vrijblijvend een offerte aan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#bars"
              className="inline-flex items-center gap-3 rounded-full border border-cream/30 bg-cream/5 px-7 py-4 text-sm font-medium text-cream backdrop-blur hover:bg-cream/10 transition-colors"
            >
              Bekijk onze bars
            </a>
          </div>
        </div>
      </section>

      {/* INTRO STORYTELLING */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="img-zoom rounded-[2.5rem] shadow-elegant order-2 lg:order-1">
            <img
              src={storyImg}
              alt="Bartender garneert een cocktail met sinaasappelschil"
              width={1280}
              height={1440}
              loading="lazy"
              className="w-full h-[560px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-copper uppercase tracking-[0.3em] text-xs mb-6">Onze filosofie</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso text-balance leading-[1.1]">
              Smaakvol proosten,<br />
              <span className="italic text-copper">waar je ook viert.</span>
            </h2>
            <div className="mt-8 space-y-5 text-espresso/75 text-lg leading-relaxed">
              <p>
                Bij Wandering Bar draait alles om beleving. Van intieme tuinfeesten en stijlvolle bruiloften tot bruisende bedrijfsborrels en exclusieve events: wij brengen een complete barervaring naar jouw locatie.
              </p>
              <p>
                Met ambachtelijke cocktails, professionele bartenders en een warme uitstraling creëren we een sfeer waarin gasten samenkomen, ontspannen en genieten. Altijd stijlvol, persoonlijk en volledig verzorgd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BROCHURE CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[2.5rem] bg-gradient-warm shadow-elegant">
          <img
            src={brochureImg}
            alt=""
            width={1600}
            height={1024}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="relative grid md:grid-cols-2 gap-10 p-10 md:p-16 lg:p-20 items-center">
            <div>
              <p className="text-champagne uppercase tracking-[0.3em] text-xs mb-5">Inspiratie</p>
              <h2 className="font-display text-4xl md:text-5xl text-cream text-balance leading-tight">
                Benieuwd welke bar perfect past bij <span className="italic text-champagne">jouw event?</span>
              </h2>
              <p className="mt-6 text-cream/75 max-w-md leading-relaxed">
                Ontdek onze cocktailconcepten, workshops, wijn- en speciaalbierbars in onze inspiratiebrochure.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-sm font-medium text-espresso shadow-soft hover:bg-champagne transition-colors"
              >
                <Download className="h-4 w-4" />
                Download inspiratiebrochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="bars" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-copper uppercase tracking-[0.3em] text-xs mb-5">Onze bars & diensten</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso text-balance leading-[1.1] max-w-2xl">
                Een bar voor elke <span className="italic text-copper">gelegenheid.</span>
              </h2>
            </div>
            <p className="text-espresso/65 max-w-md leading-relaxed">
              Leer samen cocktails shaken tijdens een interactieve workshop of geniet van een stijlvolle cocktail-, wijn- of speciaalbierbar volledig verzorgd op locatie.
            </p>
          </div>

          <div id="diensten" className="grid sm:grid-cols-2 gap-8">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-[2rem] bg-card overflow-hidden shadow-soft hover-lift"
              >
                <div className="img-zoom">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1280}
                    height={900}
                    loading="lazy"
                    className="w-full h-[360px] object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl text-espresso">{s.title}</h3>
                  <p className="mt-3 text-espresso/65 leading-relaxed">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-copper text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Meer informatie <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-sand py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-copper uppercase tracking-[0.3em] text-xs mb-6 text-center">Onze pijlers</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso text-center text-balance leading-[1.1] max-w-3xl mx-auto">
            Drie principes die elk glas <span className="italic text-copper">bijzonder</span> maken.
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {[
              { icon: Sparkles, title: "Crafted", desc: "Ambacht in elk glas. We werken met verse handgemaakte ingrediënten, eigen siropen en sappen, en doordachte garnering." },
              { icon: Users, title: "Service", desc: "Of het nu een mixoloog of sommelier is, onze vakmensen brengen sfeer en kennis naar je bar voor een complete beleving." },
              { icon: Wine, title: "Stijlvol", desc: "Van luxe mobiele barren tot professioneel glaswerk en passende aankleding die aansluit bij jouw event." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-cream flex items-center justify-center shadow-soft">
                  <Icon className="h-7 w-7 text-copper" />
                </div>
                <h3 className="mt-8 font-display text-3xl md:text-4xl text-espresso">{title}</h3>
                <p className="mt-4 text-espresso/65 leading-relaxed max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section id="events" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-copper uppercase tracking-[0.3em] text-xs mb-5">Sfeer & cases</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso text-balance leading-[1.1] max-w-3xl mx-auto">
              Ieder event verdient zijn <span className="italic text-copper">eigen ritueel.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {events.map((e, i) => (
              <a
                key={e.title}
                href="#contact"
                className={`group relative img-zoom rounded-[2rem] overflow-hidden shadow-soft hover-lift ${i % 5 === 0 ? "md:row-span-2 md:col-span-2" : ""
                  }`}
              >
                <img
                  src={e.img}
                  alt={e.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className={`w-full object-cover ${i % 5 === 0 ? "h-[300px] md:h-[620px]" : "h-[260px] md:h-[300px]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-champagne/80 text-[10px] uppercase tracking-[0.2em] mb-2">{e.tagline}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-cream">{e.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-2 text-champagne text-sm">
                    Ontdek <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BIG CTA BANNER */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[2.5rem] bg-bordeaux">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, oklch(0.74 0.15 60 / 0.5), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.62 0.13 45 / 0.4), transparent 50%)",
            }}
          />
          <div className="relative px-8 md:px-16 lg:px-24 py-20 md:py-28 text-center">
            <p className="text-champagne uppercase tracking-[0.3em] text-xs mb-6">Klaar om te proosten?</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream text-balance leading-[1.05] max-w-4xl mx-auto">
              Een cocktailbar op <span className="italic text-champagne">jouw event?</span>
            </h2>
            <p className="mt-6 text-cream/75 max-w-xl mx-auto leading-relaxed">
              Vertel ons over je gelegenheid en we ontwerpen samen de perfecte beleving.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-copper px-8 py-4 text-sm font-medium text-cream shadow-glow hover:bg-amber-glow transition-colors"
            >
              Plan een vrijblijvend gesprek
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* OVER ONS */}
      <section id="over" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-copper uppercase tracking-[0.3em] text-xs mb-6">Over Wandering Bar</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso text-balance leading-[1.1]">
              Een passie voor <span className="italic text-copper">cocktails</span> en oprechte gastvrijheid.
            </h2>
            <div className="mt-8 space-y-5 text-espresso/75 text-lg leading-relaxed">
              <p>
                Wat begon als een passie voor cocktails en gastvrijheid groeide uit tot een team van professionele bartenders en hospitalityliefhebbers met één doel: bijzondere momenten creëren die mensen samenbrengen.
              </p>
              <p>
                Van stijlvolle cocktail catering en interactieve workshops tot sfeervolle wijnbars en speciaalbierbars, wij brengen de warme uitstraling van een luxe barervaring naar iedere locatie in Nederland.
              </p>
              <p>
                Bij Wandering Bar draait alles om beleving, kwaliteit en persoonlijke aandacht. Geen standaard concepten, maar een barervaring die volledig aansluit op de sfeer, gasten en uitstraling van jouw event.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "10+", l: "Jaar ervaring" },
                { n: "500+", l: "Events per jaar" },
                { n: "4.9", l: "Gemiddelde score" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-copper">{s.n}</div>
                  <div className="text-xs text-espresso/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="img-zoom rounded-[2.5rem] shadow-elegant">
            <img
              src={workshopImg}
              alt="Team van Wandering Bar in actie"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-sand py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="text-copper uppercase tracking-[0.3em] text-xs mb-5">Wat gasten zeggen</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso text-balance leading-[1.1] max-w-3xl mx-auto">
              Verhalen van <span className="italic text-copper">gasten en gastheren.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="rounded-[2rem] bg-cream p-8 md:p-10 shadow-soft hover-lift"
              >
                <Quote className="h-8 w-8 text-copper/70" />
                <p className="mt-6 text-espresso/85 leading-relaxed text-lg">"{r.quote}"</p>
                <div className="mt-8 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-display text-lg text-espresso">{r.name}</div>
                  <div className="text-sm text-espresso/55">{r.type}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-copper uppercase tracking-[0.3em] text-xs mb-6">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso text-balance leading-[1.1]">
              Laat ons jouw event <span className="italic text-copper">tot leven brengen.</span>
            </h2>
            <p className="mt-6 text-espresso/70 text-lg leading-relaxed max-w-md">
              Vertel ons over je gelegenheid, datum en wensen. We reageren binnen 24 uur met een
              voorstel op maat.
            </p>
            <div className="mt-10 space-y-4 text-espresso/80">
              <div>
                <div className="text-xs uppercase tracking-widest text-copper mb-1">Telefoon</div>
                <a href="tel:+31610332492" className="text-lg hover:text-copper">+31 (0)6 10 33 24 92</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-copper mb-1">E-mail</div>
                <a href="mailto:info@wanderingbar.nl" className="text-lg hover:text-copper">info@wanderingbar.nl</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-copper mb-1">Locatie</div>
                <p className="text-lg">Thuisbasis in Enkhuizen, werkzaam door heel Nederland</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-card p-8 md:p-12 shadow-soft border border-border">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
