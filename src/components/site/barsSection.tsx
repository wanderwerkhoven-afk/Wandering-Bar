import type { CSSProperties, ReactNode } from "react";
import beerImg from "@/assets/beer-bar.jpg";
import brochureImg from "@/assets/brochure.jpg";
import cateringImg from "@/assets/cocktail-catering.jpg";
import wineImg from "@/assets/wine-bar.jpg";
import workshopImg from "@/assets/cocktail-workshop.jpg";
import {
  BierIcon,
  CocktailGlasIcon,
  DownloadIcon,
  PijlRechts,
  ShakerIcon,
  WijnGlasIcon,
} from "./siteIcons";

const INK = "oklch(0.24 0.03 50)";
const ACCENT = "oklch(0.55 0.11 70)";
const GOUD_VAST = "var(--goud-vast, oklch(0.8 0.105 85))";

type Dienst = {
  titel: string;
  badge: string;
  tekst: string;
  img: string;
  alt: string;
  icoon: ReactNode;
  reveal: string;
};

const diensten: Dienst[] = [
  {
    titel: "Cocktail workshops",
    badge: "Interactief",
    tekst:
      "Samen shaken, proeven en ontdekken. Tijdens onze cocktailworkshops maken je gasten zelf bijzondere cocktails en leren ze de verhalen, smaken en technieken erachter kennen. Een gezellige en interactieve ervaring voor teamuitjes, verjaardagen en vrijgezellenfeesten.",
    img: workshopImg,
    alt: "Cocktail workshops",
    icoon: <ShakerIcon width="26" height="34" stroke={ACCENT} />,
    reveal: "0",
  },
  {
    titel: "Cocktail catering",
    badge: "Signature",
    tekst:
      "Een cocktailbar die helemaal bij jouw gelegenheid past. Wij komen naar je toe met een stijlvolle baropstelling, vakkundige bartenders en een zorgvuldig samengesteld cocktailmenu. Van de eerste ontvangst tot het laatste glas draait alles om smaak, sfeer en gastvrijheid.",
    img: cateringImg,
    alt: "Cocktail catering",
    icoon: (
      <CocktailGlasIcon width="28" height="34" stroke={ACCENT}>
        <circle cx="20" cy="12" r="3.4" fill="oklch(0.55 0.11 70 / 0.2)"></circle>
      </CocktailGlasIcon>
    ),
    reveal: "90",
  },
  {
    titel: "Luxe wijnbar",
    badge: "Geselecteerd",
    tekst:
      "Een goed glas wijn maakt een mooi moment nog bijzonderder. Met onze mobiele wijnbar brengen we zorgvuldig geselecteerde wijnen, passende glazen en persoonlijke service naar jouw feest, receptie of bruiloft.",
    img: wineImg,
    alt: "Luxe wijnbar",
    icoon: <WijnGlasIcon width="24" height="34" stroke={ACCENT} />,
    reveal: "0",
  },
  {
    titel: "Speciaalbier bar",
    badge: "Van de tap",
    tekst:
      "Van frisse IPA's tot karaktervolle tripels: onze speciaalbierbar nodigt gasten uit om nieuwe favorieten te ontdekken. We verzorgen een sfeervolle bar met een passende bierselectie, glaswerk en gastvrije bediening.",
    img: beerImg,
    alt: "Speciaalbier bar",
    icoon: <BierIcon width="30" height="34" stroke={ACCENT} />,
    reveal: "90",
  },
];

const badgeStijl: CSSProperties = {
  position: "absolute",
  top: "18px",
  left: "18px",
  background: "var(--sec-badge, oklch(0.95 0.025 85 / 0.92))",
  backdropFilter: "blur(6px)",
  borderRadius: "999px",
  padding: "8px 16px",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: INK,
};

export function BarsSection() {
  return (
    <section
      id="bars"
      className="wb-sectie"
      style={{
        background: "var(--sec-bg, oklch(0.95 0.025 85))",
        color: INK,
        transition: "background 0.5s ease",
        padding: "130px 0 120px 0",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>
        <div
          className="wb-kop-rij"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "70px",
          }}
        >
          <div>
            <p
              data-reveal="0"
              style={{
                margin: "0 0 20px 0",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: ACCENT,
              }}
            >
              Onze bars &amp; diensten
            </p>
            <h2
              data-reveal="80"
              style={{
                margin: 0,
                fontFamily: "'Grandstander', sans-serif",
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: "60px",
                lineHeight: 0.96,
                letterSpacing: "-0.01em",
                color: INK,
              }}
            >
              Een bar voor elke
              <br />
              <span
                style={{
                  fontFamily: "'Yellowtail', cursive",
                  fontWeight: 400,
                  textTransform: "none",
                  fontSize: "54px",
                  color: ACCENT,
                  display: "inline-block",
                  transform: "rotate(-3deg)",
                  marginTop: "12px",
                }}
              >
                gelegenheid
              </span>
            </h2>
          </div>
          <p
            data-reveal="160"
            style={{
              margin: 0,
              maxWidth: "420px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "oklch(0.24 0.03 50 / 0.65)",
            }}
          >
            Of je nu een cocktailworkshop organiseert of een mobiele cocktail-, wijn- of speciaalbierbar
            zoekt: we denken graag mee over de invulling. Een passend menu, stijlvolle
            presentatie en persoonlijke service vormen samen een zorgeloze barervaring.
          </p>
        </div>

        <div
          id="diensten"
          className="wb-grid-kaarten"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}
        >
          {diensten.map((dienst, i) => (
            <article
              key={dienst.titel}
              data-reveal={dienst.reveal}
              className={i % 2 === 0 ? "wb-kaart-links" : "wb-kaart-rechts"}
              style={{
                borderRadius: "22px",
                background: "var(--sec-card, oklch(0.975 0.018 85))",
                border: "1px solid oklch(0.24 0.03 50 / 0.1)",
                overflow: "hidden",
                transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease",
              }}
            >
              <div className="wb-zoom-kaart" style={{ overflow: "hidden", position: "relative" }}>
                <img
                  src={dienst.img}
                  alt={dienst.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "290px",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 1.3s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
                <div style={badgeStijl}>{dienst.badge}</div>
              </div>
              <div style={{ padding: "34px 36px 38px 36px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  {dienst.icoon}
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Grandstander', sans-serif",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      fontSize: "26px",
                      letterSpacing: "0.01em",
                      color: INK,
                    }}
                  >
                    {dienst.titel}
                  </h3>
                </div>
                <p
                  style={{
                    margin: "16px 0 0 0",
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "oklch(0.24 0.03 50 / 0.68)",
                  }}
                >
                  {dienst.tekst}
                </p>
                <a
                  href="#contact"
                  className="wb-meer-link"
                  style={{
                    marginTop: "22px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: ACCENT,
                    transition: "gap 0.3s",
                  }}
                >
                  Meer informatie <PijlRechts width="15" height="15" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          data-reveal="0"
          style={{
            marginTop: "70px",
            borderRadius: "26px",
            background: "oklch(0.17 0.02 50)",
            color: "oklch(0.93 0.02 85)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={brochureImg}
            alt=""
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.18,
              mixBlendMode: "luminosity",
            }}
          />
          <div
            className="wb-grid-brochure"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "40px",
              alignItems: "center",
              padding: "64px 72px",
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: GOUD_VAST,
                }}
              >
                Inspiratie
              </p>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "'Grandstander', sans-serif",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontSize: "36px",
                  lineHeight: 1.05,
                  color: "oklch(0.95 0.02 85)",
                }}
              >
                Benieuwd welke bar past bij{" "}
                <span
                  style={{
                    fontFamily: "'Yellowtail', cursive",
                    fontWeight: 400,
                    textTransform: "none",
                    fontSize: "38px",
                    color: GOUD_VAST,
                  }}
                >
                  jouw event
                </span>
              </h3>
              <p
                style={{
                  margin: "18px 0 0 0",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "oklch(0.93 0.02 85 / 0.65)",
                  maxWidth: "460px",
                }}
              >
                Ontdek onze cocktailconcepten, workshops, wijn- en speciaalbierbars in de
                inspiratiebrochure.
              </p>
            </div>
            <div
              className="wb-brochure-actie"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <a
                href="#contact"
                className="wb-brochure-knop"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  background: GOUD_VAST,
                  color: "oklch(0.15 0.018 50)",
                  borderRadius: "999px",
                  padding: "17px 30px",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <DownloadIcon width="16" height="16" /> Download de brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
