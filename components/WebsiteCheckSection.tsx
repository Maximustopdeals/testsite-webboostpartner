import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Controle van de mobiele en desktopprestaties",
  "Beoordeling van belangrijke technische SEO-aspecten",
  "Drie tot vijf concrete aandachtspunten",
  "Persoonlijke terugkoppeling rechtstreeks van mij",
];

export default function WebsiteCheckSection() {
  return (
    <section
      aria-labelledby="websitecheck-heading"
      className="relative overflow-hidden border-y border-border-subtle bg-background-secondary py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-7">
          <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accessible">
            Gratis en vrijblijvend
          </p>

          <h2
            id="websitecheck-heading"
            className="mb-6 max-w-2xl font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            Benieuwd hoe uw website ervoor staat?
          </h2>

          <p className="mb-5 max-w-2xl font-sans text-base leading-relaxed text-foreground-muted sm:text-lg">
            Een goede website moet niet alleen mooi zijn. Ook snelheid,
            techniek en vindbaarheid spelen een belangrijke rol. Ik bekijk
            uw website persoonlijk en laat u zien waar verbeterkansen liggen.
          </p>

          <p className="max-w-2xl font-sans text-base leading-relaxed text-foreground-muted">
            U ontvangt een persoonlijke terugkoppeling met drie tot vijf
            concrete aandachtspunten. Zo weet u waar uw website staat en
            welke verbeteringen interessant kunnen zijn.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-border-subtle bg-background p-7 shadow-soft sm:p-9">
            <h3 className="mb-6 font-serif text-2xl text-foreground">
              Wat bekijk ik voor u?
            </h3>

            <ul className="mb-8 space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check
                    size={19}
                    className="mt-0.5 shrink-0 text-brand-accessible"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-sm leading-relaxed text-foreground-muted">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact?intent=analyse"
              className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-brand-accessible px-6 py-4 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-accessible-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Vraag mijn gratis websitecheck aan
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <p className="mt-5 text-center font-sans text-xs leading-relaxed text-foreground-muted">
              Persoonlijke reactie binnen één tot twee werkdagen. Zonder
              verplichtingen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
