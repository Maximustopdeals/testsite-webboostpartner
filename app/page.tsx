import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Monitor,
  Smartphone,
} from "lucide-react";

import USPGrid from "@/components/USPGrid";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Webdesign Rotterdam | Persoonlijk & professioneel | WebBoost Partner",
  description:
    "Op zoek naar professioneel webdesign in Rotterdam? Ik bouw snelle, gebruiksvriendelijke Next.js-websites voor zzp'ers en mkb. Persoonlijk contact en duidelijke prijzen.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webdesign Rotterdam | WebBoost Partner",
    description:
      "Professioneel webdesign voor zzp'ers en mkb in Rotterdam en omgeving. Persoonlijke begeleiding, doordachte techniek en duidelijke afspraken.",
    url: "https://www.webboostpartner.nl/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Rotterdam | WebBoost Partner",
    description:
      "Persoonlijk webdesign voor ondernemers in Rotterdam en omgeving.",
  },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Wat kost professioneel webdesign in Rotterdam?",
    a: "Mijn websitepakketten beginnen bij € 1.950 excl. btw. De uiteindelijke investering hangt af van de omvang, functionaliteit en wensen van uw website. U ontvangt vooraf een duidelijk voorstel. Bekijk de pakketten en prijzen voor meer informatie.",
  },
  {
    q: "Wat moet ik zelf aanleveren voor mijn website?",
    a: "U levert in principe uw eigen teksten en foto's aan. Ik verzorg de structuur, vormgeving, plaatsing en technische verwerking. Heeft u nog geen geschikte webteksten? Dan kan ik het schrijven of uitgebreid redigeren daarvan als aanvullende dienst voor u verzorgen. Dit bespreek ik vooraf met u.",
  },
  {
    q: "Krijg ik de broncode van mijn website?",
    a: "Ja. U ontvangt de broncode van uw website in een eigen Git-repository. U bent daardoor niet afhankelijk van een gesloten websiteplatform. U kunt de website zelf laten beheren, aan een andere ontwikkelaar overdragen of naar een andere geschikte hostingomgeving verplaatsen.",
  },
  {
    q: "Waarom bouwt u met Next.js in plaats van WordPress?",
    a: "Next.js biedt veel mogelijkheden om een snelle, op maat gemaakte website te bouwen met controle over de techniek. WordPress kan juist handig zijn wanneer u veel zelf wilt aanpassen of afhankelijk bent van bestaande plugins en integraties. Welke oplossing het beste past, hangt af van uw wensen. Ik help u graag een passende keuze te maken.",
  },
  {
    q: "Werkt WebBoost Partner alleen in Rotterdam?",
    a: "Mijn focus ligt op Rotterdam en omliggende plaatsen zoals Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam. Ook voor ondernemers buiten deze regio bespreek ik graag de mogelijkheden. Contact kan online of, waar passend, op locatie.",
  },
  {
    q: "Hoe lang duurt het bouwen van een website?",
    a: "De doorlooptijd hangt af van het aantal pagina's, de gewenste functionaliteiten en hoe snel teksten en foto's beschikbaar zijn. Vooraf bespreek ik de planning en de verschillende stappen, zodat u weet waar u aan toe bent.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.webboostpartner.nl/#service",
      name: "WebBoost Partner",
      image: "https://www.webboostpartner.nl/og.jpg",
      url: "https://www.webboostpartner.nl/",
      priceRange: "€€",
      description:
        "Persoonlijk webdesign en Next.js-websiteontwikkeling voor zzp'ers en mkb-bedrijven in Rotterdam en omgeving.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rotterdam",
        addressCountry: "NL",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Rotterdam",
        },
        {
          "@type": "City",
          name: "Capelle aan den IJssel",
        },
        {
          "@type": "City",
          name: "Krimpen aan den IJssel",
        },
        {
          "@type": "City",
          name: "Ridderkerk",
        },
        {
          "@type": "City",
          name: "Barendrecht",
        },
        {
          "@type": "City",
          name: "Schiedam",
        },
      ],
      parentOrganization: {
        "@id": "https://www.webboostpartner.nl/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.webboostpartner.nl/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="relative overflow-hidden bg-background pb-20 pt-28 lg:pb-24 lg:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accessible">
              WebBoost Partner · Rotterdam
            </p>

            <h1 className="mb-8 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Webdesign Rotterdam,
              <span className="mt-2 block italic text-brand-accessible">
                met aandacht voor uw onderneming.
              </span>
            </h1>

            <p className="mb-10 max-w-2xl font-sans text-lg leading-relaxed text-foreground-muted sm:text-xl">
              Ik ontwerp en bouw professionele websites voor zzp'ers en
              mkb-bedrijven in Rotterdam en omgeving. Daarbij kijk ik niet
              alleen naar het ontwerp, maar ook naar gebruiksgemak, snelheid,
              vindbaarheid en de doelen van uw onderneming.
            </p>

            <p className="mb-10 max-w-2xl font-sans text-base leading-relaxed text-foreground-muted">
              U heeft rechtstreeks contact met mij. Van het eerste gesprek
              en de structuur tot het ontwerp, de technische realisatie en
              de oplevering. Zo weet u precies wie aan uw website werkt en
              waar u aan toe bent.
            </p>

            <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact?intent=advies"
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand-accessible px-8 py-4 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-accessible-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Bespreek uw website
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-2 py-3 font-sans text-sm font-semibold text-foreground transition-colors hover:text-brand-accessible"
              >
                Bekijk mijn werk
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="mb-10 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2 font-sans text-sm font-medium text-foreground">
                <Check
                  size={18}
                  className="shrink-0 text-brand-accessible"
                  aria-hidden="true"
                />
                Duidelijke prijsafspraken
              </div>

              <div className="flex items-center gap-2 font-sans text-sm font-medium text-foreground">
                <Check
                  size={18}
                  className="shrink-0 text-brand-accessible"
                  aria-hidden="true"
                />
                Eigen broncode
              </div>

              <div className="flex items-center gap-2 font-sans text-sm font-medium text-foreground">
                <Check
                  size={18}
                  className="shrink-0 text-brand-accessible"
                  aria-hidden="true"
                />
                Rechtstreeks contact
              </div>
            </div>

            <div className="space-y-3 border-t border-border-subtle pt-8 font-sans text-sm leading-relaxed text-foreground-muted">
              <p>
                <strong className="font-semibold text-foreground">
                  Mijn diensten:
                </strong>{" "}
                <Link
                  href="/website-laten-maken-rotterdam"
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:text-brand-accessible hover:decoration-brand-accessible"
                >
                  Website laten maken
                </Link>
                {" · "}
                <Link
                  href="/seo-rotterdam"
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:text-brand-accessible hover:decoration-brand-accessible"
                >
                  SEO Rotterdam
                </Link>
                {" · "}
                <Link
                  href="/pakketten"
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:text-brand-accessible hover:decoration-brand-accessible"
                >
                  Pakketten en prijzen
                </Link>
              </p>

              <p>
                <strong className="font-semibold text-foreground">
                  Meer over mijn werkwijze:
                </strong>{" "}
                <Link
                  href="/over-mij"
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:text-brand-accessible hover:decoration-brand-accessible"
                >
                  Over mij
                </Link>
                {" · "}
                <Link
                  href="/wordpress-naar-nextjs"
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:text-brand-accessible hover:decoration-brand-accessible"
                >
                  WordPress naar Next.js
                </Link>
                {" · "}
                <Link
                  href="/nextjs-vs-wordpress"
                  className="underline decoration-transparent underline-offset-4 transition-colors hover:text-brand-accessible hover:decoration-brand-accessible"
                >
                  Next.js versus WordPress
                </Link>
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="rounded-sm border border-border-subtle bg-white p-8 shadow-soft sm:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-border-subtle pb-6">
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
                    Project in de praktijk
                  </p>
                  <p className="mt-2 font-serif text-xl text-foreground">
                    Prestaties op PageSpeed
                  </p>
                </div>

                <span className="rounded-full border border-border-subtle bg-background-secondary px-3 py-1 text-xs font-medium text-foreground-muted">
                  Projectmeting
                </span>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-6 border-b border-border-subtle pb-8">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-foreground-muted">
                    <Monitor size={16} aria-hidden="true" />
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                      Desktop
                    </span>
                  </div>

                  <p className="font-serif text-6xl leading-none text-brand-accessible">
                    100
                  </p>
                  <p className="mt-2 font-sans text-xs text-foreground-muted">
                    PageSpeed-score
                  </p>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2 text-foreground-muted">
                    <Smartphone size={16} aria-hidden="true" />
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                      Mobiel
                    </span>
                  </div>

                  <p className="font-serif text-6xl leading-none text-brand-accessible">
                    95
                  </p>
                  <p className="mt-2 font-sans text-xs text-foreground-muted">
                    PageSpeed-score
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                  Gerealiseerd project
                </p>

                <h2 className="mb-3 font-serif text-2xl text-foreground">
                  Marley&apos;s Kraamzorg
                </h2>

                <p className="font-sans text-sm leading-relaxed text-foreground-muted">
                  Een op maat gemaakte website, met aandacht voor vormgeving,
                  gebruiksgemak en technische prestaties.
                </p>
              </div>

              <a
                href="https://pagespeed.web.dev/analysis?url=https://www.marleyskraamzorg.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-background-secondary py-3.5 font-sans text-sm font-semibold text-foreground transition-colors hover:bg-border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Bekijk de meting bij Google
                <ExternalLink size={16} aria-hidden="true" />
                <span className="sr-only">
                  (opent in een nieuw tabblad)
                </span>
              </a>

              <p className="mt-4 font-sans text-xs leading-relaxed text-foreground-muted">
                Dit zijn gemeten projectresultaten. Scores kunnen per meting
                en apparaat verschillen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <USPGrid />

      <section className="bg-background-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accessible">
              Veelgestelde vragen
            </p>

            <h2 className="mb-5 font-serif text-4xl text-foreground sm:text-5xl">
              Goed om vooraf te weten.
            </h2>

            <p className="font-sans leading-relaxed text-foreground-muted">
              Heeft u vragen over de kosten, de techniek of de samenwerking?
              Hieronder vindt u alvast antwoord op veelgestelde vragen.
            </p>
          </div>

          <FAQ items={faqs} schemaId="home" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
