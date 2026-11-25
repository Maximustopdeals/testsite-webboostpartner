import React from "react";
import {
  Gauge,
  Search,
  MapPin,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface USPItem {
  icon: React.ComponentType<{
    size: number;
    strokeWidth?: number;
    className?: string;
  }>;
  title: string;
  desc: string;
}

const items: USPItem[] = [
  {
    icon: Gauge,
    title: "Snel en technisch sterk",
    desc: "Ik bouw met Next.js en besteed veel aandacht aan laadtijd, techniek en gebruiksgemak. Zo krijgt uw website een solide basis voor een prettige bezoekerservaring.",
  },
  {
    icon: Search,
    title: "Een goede basis voor SEO",
    desc: "Ik zorg voor een heldere paginastructuur, semantische HTML en technisch verzorgde SEO. Daarmee help ik zoekmachines uw website beter te begrijpen.",
  },
  {
    icon: TrendingUp,
    title: "Ontworpen met een doel",
    desc: "Een mooie website moet ook voor uw onderneming werken. Daarom let ik op duidelijke informatie, logische navigatie en herkenbare contactmogelijkheden.",
  },
  {
    icon: MapPin,
    title: "Persoonlijk contact",
    desc: "U heeft rechtstreeks contact met mij. Ik werk vanuit Rotterdam en help ondernemers in de regio met korte lijnen en duidelijke afspraken.",
  },
  {
    icon: Handshake,
    title: "Duidelijkheid vooraf",
    desc: "U weet vooraf wat ik voor u ga bouwen en wat de kosten zijn. Ik bespreek de mogelijkheden helder, zonder onnodig technisch jargon.",
  },
  {
    icon: ShieldCheck,
    title: "Een onderhoudsvriendelijk fundament",
    desc: "Ik bouw zonder onnodige plug-ins en met aandacht voor veiligheid en betrouwbaarheid. Dat beperkt afhankelijkheden en maakt het beheer overzichtelijker.",
  },
];

export default function USPGrid() {
  return (
    <section
      className="bg-background-secondary py-24 sm:py-32"
      data-testid="usp-grid"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-accessible">
            De voordelen van mijn aanpak
          </p>

          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Een sterke website begint
            <br />
            met{" "}
            <span className="italic text-brand-accessible">
              de juiste basis
            </span>
            .
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-foreground-muted">
            Geen standaardoplossing, maar een website die aansluit bij uw
            onderneming. Met persoonlijke begeleiding, doordachte techniek
            en aandacht voor ieder detail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-sm border border-border-subtle bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand-accessible">
                  <Icon
                    size={24}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-3 font-serif text-xl text-foreground">
                  {item.title}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-foreground-muted">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
