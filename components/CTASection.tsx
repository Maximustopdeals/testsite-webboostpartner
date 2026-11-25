import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  button?: string;
  href?: string;
}

export default function CTASection({
  title = "Heeft u plannen voor een nieuwe website?",
  subtitle = "Vertel mij wat u met uw website wilt bereiken. Ik denk met u mee over de mogelijkheden en geef u een helder beeld van de aanpak, de investering en wat daarbij past.",
  button = "Bespreek uw website",
  href = "/contact?intent=advies",
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-foreground py-24 text-white sm:py-32"
      data-testid="cta-section"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
        <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#F0A77F]">
          Persoonlijk kennismaken
        </p>

        <h2 className="mb-8 max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h2>

        <p className="mb-10 max-w-2xl font-sans text-base leading-relaxed text-white/75 sm:text-lg">
          {subtitle}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-3 rounded-sm bg-brand-accessible px-8 py-4 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-accessible-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
          data-testid="cta-button"
        >
          {button}
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <p className="mt-6 font-sans text-sm text-white/55">
          Rechtstreeks contact, zonder verplichtingen.
        </p>
      </div>
    </section>
  );
}
