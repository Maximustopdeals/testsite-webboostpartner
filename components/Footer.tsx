import Link from "next/link";
import { Mail, Phone, MapPin, Zap, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  {
    href: "/website-laten-maken-rotterdam",
    label: "Website laten maken",
  },
  {
    href: "/seo-rotterdam",
    label: "SEO Rotterdam",
  },
  {
    href: "/wordpress-naar-nextjs",
    label: "WordPress naar Next.js",
  },
  {
    href: "/pakketten",
    label: "Pakketten en tarieven",
  },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/voorwaarden", label: "Voorwaarden" },
  { href: "/cookiebeleid", label: "Cookies" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border-subtle bg-background-secondary text-foreground"
      data-testid="site-footer"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-8">

        {/* BEDRIJFSPROFIEL */}
        <div className="md:col-span-2 lg:pr-12">
          <Link
            href="/"
            aria-label="WebBoost Partner - Home"
            className="mb-5 inline-flex items-center gap-3 font-serif text-2xl text-foreground transition-opacity hover:opacity-80"
          >
            <span className="grid h-10 w-10 place-items-center rounded-sm bg-brand text-white">
              <Zap size={20} className="fill-current" aria-hidden="true" />
            </span>
            WebBoost Partner
          </Link>

          <p className="max-w-md font-sans text-sm leading-7 text-foreground-muted">
            Ik ontwerp en bouw professionele Next.js-websites voor zzp&apos;ers
            en mkb-bedrijven in Rotterdam en omgeving. Met persoonlijke
            begeleiding, aandacht voor detail en een technisch sterk fundament.
          </p>

          <Link
            href="/over-mij"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
          >
            Meer over mijn werkwijze
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* DIENSTEN */}
        <div>
          <h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-brand-accessible">
            Mijn diensten
          </h2>

          <ul className="space-y-3 font-sans text-sm text-foreground-muted">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.16em] text-brand-accessible">
            Contact
          </h2>

          <ul className="space-y-5 font-sans text-sm text-foreground-muted">
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-brand"
                aria-hidden="true"
              />

              <span>
                Rotterdam, Nederland
                <span className="mt-1 block text-xs text-foreground-muted">
                  Werkzaam in de regio Rijnmond
                </span>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={18}
                className="shrink-0 text-brand"
                aria-hidden="true"
              />

              <a
                href="tel:+31642628242"
                className="transition-colors hover:text-brand"
                data-testid="footer-phone"
              >
                06-42628242
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={18}
                className="shrink-0 text-brand"
                aria-hidden="true"
              />

              <a
                href="mailto:info@webboostpartner.nl"
                className="break-all transition-colors hover:text-brand"
                data-testid="footer-email"
              >
                info@webboostpartner.nl
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER ONDERZIJDE */}
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-center md:flex-row md:text-left lg:px-8">

          <p className="font-sans text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} WebBoost Partner. Alle rechten
            voorbehouden.
          </p>

          <p className="font-sans text-xs text-foreground-muted">
            Ontworpen en gebouwd met Next.js
          </p>

          <nav
            aria-label="Juridische informatie"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-xs text-foreground-muted"
          >
            {legalLinks.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-4">
                {index > 0 && (
                  <span aria-hidden="true" className="text-border-subtle">
                    ·
                  </span>
                )}

                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
