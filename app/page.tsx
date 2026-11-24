import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Monitor,
  Smartphone,
  Star,
  Sparkles,
} from "lucide-react";

import USPGrid from "@/components/USPGrid";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "Webdesign Rotterdam | Website Laten Maken | 95+ PageSpeed | WebBoost Partner",
  description:
    "Webdesign Rotterdam en website laten maken? WebBoost Partner bouwt bliksemsnelle Next.js websites die jouw vakmanschap tonen en bezoekers omzetten in klanten. Vaste prijs, lokaal, SEO inbegrepen.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Webdesign Rotterdam | Website Laten Maken | WebBoost Partner",
    description:
      "Bliksemsnelle Next.js websites in Rotterdam. 95+ PageSpeed, vaste prijs, meer aanvragen.",
    url: "https://www.webboostpartner.nl",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Rotterdam | Website Laten Maken",
    description:
      "Razendsnelle Next.js websites met 95+ PageSpeed. Lokaal in Rotterdam.",
  },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Wat kost een website laten maken in Rotterdam?",
    a: "Bij WebBoost Partner start een website laten maken in Rotterdam vanaf €1.950 excl. btw. U krijgt een Next.js-website met 95+ PageSpeed, SEO inbegrepen, vaste prijs en 100% eigenaarschap van de code. Bekijk de pakketten voor een exacte prijsindicatie.",
  },
  {
    q: "Krijg ik de code van mijn website in eigendom?",
    a: "Ja. U krijgt een standalone Git-repository met alle broncode. Geen proprietary platform lock-in: u kunt de site op elk moment zelf hosten, doorgeven aan een andere developer of migreren naar Vercel. Dat is een bewuste keuze van WebBoost Partner.",
  },
  {
    q: "Werken jullie ook buiten Rotterdam?",
    a: "Ja, WebBoost Partner werkt landelijk, met het zwaartepunt in Rotterdam en omgeving (Capelle aan den IJssel, Krimpen, Ridderkerk, Barendrecht, Schiedam). Kennismaken kan op locatie of online.",
  },
  {
    q: "Waarom Next.js en niet WordPress?",
    a: "Next.js is sneller, veiliger en onderhoudsarmer dan WordPress. U heeft geen plugin-updates, geen openbare inlog en volledige controle over snelheid en SEO. Voor ZZP en MKB in Rotterdam die snelheid en vindbaarheid belangrijk vinden, is Next.js meestal de betere keuze. Lees de eerlijke vergelijking.",
  },
  {
    q: "Hoe lang duurt het voordat mijn website klaar is?",
    a: "Een gemiddelde website voor ZZP of MKB is binnen 3 tot 6 weken live. Bij een WordPress naar Next.js migratie duurt dit 2 tot 4 weken. U krijgt altijd vooraf een heldere planning met vaste prijs.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.webboostpartner.nl/#organization",
                name: "WebBoost Partner",
                url: "https://www.webboostpartner.nl",
                logo: "https://www.webboostpartner.nl/og.jpg",
                description:
                  "WebBoost Partner is een Nederlands webbureau dat razendsnelle Next.js-websites bouwt voor ZZP en MKB in Rotterdam en omgeving. Vaste prijs, SEO inbegrepen, 100% eigenaarschap van de code.",
                founder: {
                  "@id": "https://www.webboostpartner.nl/over-mij#person",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Rotterdam",
                  addressCountry: "NL",
                },
                areaServed: [
                  { "@type": "City", name: "Rotterdam" },
                  { "@type": "City", name: "Capelle aan den IJssel" },
                  { "@type": "City", name: "Krimpen aan den IJssel" },
                  { "@type": "City", name: "Ridderkerk" },
                  { "@type": "City", name: "Barendrecht" },
                  { "@type": "City", name: "Schiedam" },
                ],
                sameAs: [
                  "https://www.linkedin.com/company/webboostpartner",
                  "https://www.kvk.nl/bedrijf/webboostpartner",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://www.webboostpartner.nl/#website",
                url: "https://www.webboostpartner.nl",
                name: "WebBoost Partner",
                publisher: {
                  "@id": "https://www.webboostpartner.nl/#organization",
                },
                inLanguage: "nl-NL",
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://www.webboostpartner.nl/#service",
                name: "WebBoost Partner",
                image: "https://www.webboostpartner.nl/og.jpg",
                url: "https://www.webboostpartner.nl",
                priceRange: "€€",
                description:
                  "Webdesign en Next.js-websiteontwikkeling voor ZZP en MKB in Rotterdam. Websites met 95+ PageSpeed, SEO inbegrepen en vaste prijs.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Rotterdam",
                  addressCountry: "NL",
                },
                areaServed: {
                  "@type": "City",
                  name: "Rotterdam",
                },
                parentOrganization: {
                  "@id": "https://www.webboostpartner.nl/#organization",
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/#faq",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-background pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32">
        {/* Subtiele decoratieve achtergrond */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-accent/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-brand/5 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          {/* Linkerkolom */}
          <div className="lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border-subtle bg-white/70 px-4 py-2 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Webdesign & Next.js in Rotterdam
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-5xl leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[76px]">
              Webdesign Rotterdam
              <span className="mt-2 block italic text-accent">
                die klanten oplevert.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-foreground-muted sm:text-xl">
              WebBoost Partner bouwt bliksemsnelle Next.js-websites die jouw
              vakmanschap laten zien en bezoekers omzetten in echte aanvragen.
              Geen standaard templates, maar{" "}
              <Link
                href="/portfolio"
                className="font-semibold text-brand underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                bewezen maatwerk
              </Link>{" "}
              met 100% eigenaarschap van de code.
            </p>

            {/* CTA's */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact?intent=advies"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand px-7 py-4 font-sans text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-card"
              >
                Vraag gratis adviesgesprek aan
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-6 py-4 font-sans text-sm font-semibold text-brand transition-colors hover:text-accent"
              >
                Bekijk gerealiseerde websites
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Vertrouwenspunten */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-border-subtle pt-7">
              <div className="flex items-center gap-2 font-sans text-sm font-medium text-foreground">
                <Check size={17} className="text-accent" aria-hidden="true" />
                Vaste prijs vooraf
              </div>
              <div className="flex items-center gap-2 font-sans text-sm font-medium text-foreground">
                <Check size={17} className="text-accent" aria-hidden="true" />
                100% eigenaarschap
              </div>
              <div className="flex items-center gap-2 font-sans text-sm font-medium text-foreground">
                <Check size={17} className="text-accent" aria-hidden="true" />
                Persoonlijk contact
              </div>
            </div>

            {/* Diensten en interne links */}
            <div className="mt-10 space-y-3 border-t border-border-subtle pt-7 font-sans text-sm leading-7 text-foreground-muted">
              <p>
                <strong className="font-semibold text-foreground">
                  Diensten:
                </strong>{" "}
                <Link
                  href="/website-laten-maken-rotterdam"
                  className="transition-colors hover:text-accent"
                >
                  Website laten maken Rotterdam
                </Link>
                {" · "}
                <Link
                  href="/seo-rotterdam"
                  className="transition-colors hover:text-accent"
                >
                  SEO Rotterdam
                </Link>
                {" · "}
                <Link
                  href="/pakketten"
                  className="transition-colors hover:text-accent"
                >
                  Pakketten &amp; prijzen
                </Link>
              </p>
              <p>
                <strong className="font-semibold text-foreground">
                  Meer weten:
                </strong>{" "}
                <Link
                  href="/wordpress-naar-nextjs"
                  className="transition-colors hover:text-accent"
                >
                  WordPress naar Next.js
                </Link>
                {" · "}
                <Link
                  href="/nextjs-vs-wordpress"
                  className="transition-colors hover:text-accent"
                >
                  Next.js vs WordPress
                </Link>
                {" · "}
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-accent"
                >
                  Portfolio
                </Link>
              </p>
            </div>
          </div>

          {/* Rechterkolom: prestaties */}
          <div className="relative lg:col-span-5">
            <div className="absolute -right-4 -top-5 hidden h-24 w-24 rounded-full border border-accent/20 sm:block" />

            <div className="relative overflow-hidden rounded-[28px] border border-border-subtle bg-white p-7 shadow-card sm:p-9">
              <div className="mb-8 flex items-center justify-between border-b border-border-subtle pb-6">
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-foreground-muted">
                    Resultaat in de praktijk
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-foreground">
                    Snelheid die u kunt zien.
                  </h2>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
                  <Sparkles size={21} aria-hidden="true" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-background p-5">
                  <div className="mb-4 flex items-center gap-2 text-foreground-muted">
                    <Monitor size={16} aria-hidden="true" />
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                      Desktop
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-6xl leading-none text-brand">
                      100
                    </span>
                    <span className="font-sans text-sm text-foreground-muted">
                      /100
                    </span>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-border-subtle">
                    <div className="h-full w-full rounded-full bg-brand" />
                  </div>
                </div>

                <div className="rounded-2xl bg-background p-5">
                  <div className="mb-4 flex items-center gap-2 text-foreground-muted">
                    <Smartphone size={16} aria-hidden="true" />
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                      Mobiel
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-6xl leading-none text-brand">
                      95
                    </span>
                    <span className="font-sans text-sm text-foreground-muted">
                      /100
                    </span>
                  </div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-border-subtle">
                    <div className="h-full w-[95%] rounded-full bg-accent" />
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-brand p-6 text-white">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                    Recent project
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-sans text-[11px] font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8BD3A8]" />
                    Geverifieerd
                  </span>
                </div>

                <h3 className="font-serif text-3xl text-white">
                  Marley&apos;s Kraamzorg
                </h3>
                <p className="mt-3 font-sans text-sm leading-6 text-white/75">
                  Volledig op maat gemaakt met een uitzonderlijk snelle
                  laadtijd en een perfecte beoordeling.
                </p>

                <a
                  href="https://pagespeed.web.dev/analysis?url=https://www.marleyskraamzorg.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white transition-colors hover:text-[#F5B18D]"
                >
                  Bekijk de live score bij Google
                  <ExternalLink size={15} aria-hidden="true" />
                  <span className="sr-only">(opent in een nieuw tabblad)</span>
                </a>
              </div>

              <p className="mt-6 text-center font-sans text-xs leading-5 text-foreground-muted">
                Gemeten PageSpeed-resultaten van het getoonde project.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl"
            />
          </div>
        </div>
      </section>

      {/* USP'S */}
      <USPGrid />

      {/* FAQ */}
      <section
        className="bg-background py-24 sm:py-28"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Duidelijkheid vooraf
              </p>
              <h2
                id="faq-heading"
                className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl"
              >
                Veelgestelde vragen.
              </h2>
              <p className="mt-5 max-w-sm font-sans leading-7 text-foreground-muted">
                Alles wat je wilt weten over samenwerken met WebBoost Partner.
              </p>
            </div>

            <div className="lg:col-span-8">
              <FAQ items={faqs} schemaId="home" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
