import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring | WebBoost Partner",
  description:
    "Privacyverklaring van WebBoost Partner. Lees hoe ik omga met uw persoonsgegevens, cookies en uw privacyrechten.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
            Juridische informatie
          </span>

          <h1 className="mb-6 text-4xl font-semibold text-foreground md:text-5xl">
            Privacyverklaring
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted">
            Ik vind uw privacy belangrijk. In deze privacyverklaring leest u
            welke persoonsgegevens ik verwerk, waarom ik dat doe en hoe ik
            zorgvuldig met uw gegevens omga.
          </p>

          <p className="mt-6 text-sm text-foreground-muted">
            Laatst bijgewerkt: 19 september 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-12 text-base leading-8 text-foreground-muted">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                1. Wie ben ik?
              </h2>

              <p>
                WebBoost Partner is verantwoordelijk voor de verwerking van
                persoonsgegevens zoals beschreven in deze privacyverklaring.
              </p>

              <ul className="mt-4 space-y-2">
                <li>Bedrijfsnaam: WebBoost Partner</li>
                <li>Adres: Neeltje Griffijnstraat 12, 3065 KD Rotterdam</li>
                <li>
                  E-mail:{" "}
                  <a
                    href="mailto:info@webboostpartner.nl"
                    className="text-brand underline underline-offset-4"
                  >
                    info@webboostpartner.nl
                  </a>
                </li>
                <li>
                  Telefoon:{" "}
                  <a
                    href="tel:+31642628242"
                    className="text-brand underline underline-offset-4"
                  >
                    06-42628242
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                2. Welke persoonsgegevens verwerk ik?
              </h2>

              <p>
                Wanneer u contact met mij opneemt of gebruikmaakt van mijn
                diensten, kan ik de volgende persoonsgegevens verwerken:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Naam en bedrijfsnaam</li>
                <li>E-mailadres en telefoonnummer</li>
                <li>Gegevens die u zelf invult in het contactformulier</li>
                <li>Informatie over uw website of aanvraag</li>
                <li>
                  Technische gegevens, zoals IP-adres, browsertype,
                  besturingssysteem en bezochte pagina's
                </li>
                <li>
                  Correspondentie en overige informatie die u vrijwillig
                  verstrekt
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                3. Waarom verwerk ik uw persoonsgegevens?
              </h2>

              <p>
                Ik verwerk uw persoonsgegevens uitsluitend voor de volgende
                doeleinden:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Het beantwoorden van vragen en contactverzoeken
                </li>
                <li>
                  Het opstellen en versturen van offertes
                </li>
                <li>
                  Het uitvoeren van overeenkomsten en geleverde diensten
                </li>
                <li>
                  Het onderhouden van contact over lopende projecten
                </li>
                <li>
                  Het verbeteren en beveiligen van mijn website
                </li>
                <li>
                  Het voldoen aan wettelijke verplichtingen
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                4. Op basis van welke grondslag?
              </h2>

              <p>
                Ik verwerk persoonsgegevens op basis van een of meer van de
                volgende wettelijke grondslagen:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Uw toestemming, wanneer toestemming wettelijk vereist is
                </li>
                <li>
                  De uitvoering van een overeenkomst of het nemen van
                  voorbereidende stappen daarvoor
                </li>
                <li>
                  Het voldoen aan een wettelijke verplichting
                </li>
                <li>
                  Mijn gerechtvaardigd belang, bijvoorbeeld voor het
                  beantwoorden van zakelijke vragen en het beveiligen van mijn
                  website
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                5. Hoe lang bewaar ik uw gegevens?
              </h2>

              <p>
                Ik bewaar uw persoonsgegevens niet langer dan noodzakelijk
                voor het doel waarvoor ze zijn verzameld, tenzij een wettelijke
                bewaartermijn anders voorschrijft.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Offertes en correspondentie: maximaal 2 jaar na het laatste
                  contact, tenzij een langere bewaartermijn noodzakelijk is.
                </li>
                <li>
                  Financiële administratie: 7 jaar, conform de wettelijke
                  fiscale bewaarplicht.
                </li>
                <li>
                  Projectgegevens: zolang dit noodzakelijk is voor de
                  uitvoering van de overeenkomst en eventuele vervolgafspraken.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                6. Delen van persoonsgegevens met derden
              </h2>

              <p>
                Ik verkoop uw persoonsgegevens nooit aan derden. Ik deel
                gegevens alleen wanneer dit noodzakelijk is voor mijn
                dienstverlening, de werking van mijn website of om te voldoen
                aan een wettelijke verplichting.
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-foreground">Vercel:</strong> voor
                  hosting en het beschikbaar stellen van mijn website.
                </li>
                <li>
                  <strong className="text-foreground">Resend:</strong> voor
                  het verwerken en verzenden van berichten die via mijn
                  contactformulier worden ingediend.
                </li>
                <li>
                  <strong className="text-foreground">Google Analytics:</strong>{" "}
                  voor het analyseren van het websitegebruik, voor zover deze
                  dienst is geactiveerd en overeenkomstig de geldende
                  privacyvoorkeuren wordt gebruikt.
                </li>
                <li>
                  <strong className="text-foreground">
                    Overheidsinstanties:
                  </strong>{" "}
                  wanneer ik daartoe wettelijk verplicht ben.
                </li>
              </ul>

              <p className="mt-4">
                Met partijen die namens mij persoonsgegevens verwerken, maak
                ik waar nodig afspraken over de bescherming en beveiliging van
                deze gegevens.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                7. Hoe beveilig ik uw gegevens?
              </h2>

              <p>
                Ik neem passende technische en organisatorische maatregelen om
                uw persoonsgegevens te beschermen tegen verlies, misbruik,
                onbevoegde toegang en ongewenste openbaarmaking.
              </p>

              <p className="mt-4">
                Mijn website maakt gebruik van een beveiligde HTTPS-verbinding.
                Daarnaast maak ik gebruik van betrouwbare dienstverleners voor
                de technische werking van mijn website en de verwerking van
                contactverzoeken.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                8. Cookies en websiteanalyse
              </h2>

              <p>
                Mijn website kan cookies en vergelijkbare technieken gebruiken
                om de website goed te laten functioneren en inzicht te krijgen
                in het gebruik ervan.
              </p>

              <p className="mt-4">
                Voor analytische of andere cookies waarvoor toestemming
                verplicht is, vraag ik vooraf toestemming. Meer informatie
                vindt u in mijn cookiebeleid.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                9. Uw privacyrechten
              </h2>

              <p>
                U heeft op grond van de AVG verschillende rechten met
                betrekking tot uw persoonsgegevens. U kunt mij verzoeken om:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Uw persoonsgegevens in te zien</li>
                <li>Onjuiste gegevens te laten corrigeren</li>
                <li>Uw persoonsgegevens te laten verwijderen</li>
                <li>De verwerking van uw gegevens te beperken</li>
                <li>Uw gegevens over te dragen</li>
                <li>Bezwaar te maken tegen bepaalde verwerkingen</li>
                <li>
                  Eerder gegeven toestemming weer in te trekken
                </li>
              </ul>

              <p className="mt-4">
                U kunt hiervoor contact opnemen via{" "}
                <a
                  href="mailto:info@webboostpartner.nl"
                  className="text-brand underline underline-offset-4"
                >
                  info@webboostpartner.nl
                </a>
                . Ik reageer in principe binnen één maand op uw verzoek.
              </p>

              <p className="mt-4">
                U heeft daarnaast het recht om een klacht in te dienen bij de
                Autoriteit Persoonsgegevens via{" "}
                <a
                  href="https://autoriteitpersoonsgegevens.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline underline-offset-4"
                >
                  autoriteitpersoonsgegevens.nl
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-foreground">
                10. Contact
              </h2>

              <p>
                Heeft u vragen over deze privacyverklaring of over de manier
                waarop ik met uw persoonsgegevens omga? Neem dan gerust
                contact met mij op.
              </p>

              <p className="mt-4">
                WebBoost Partner
                <br />
                Neeltje Griffijnstraat 12
                <br />
                3065 KD Rotterdam
                <br />
                <a
                  href="mailto:info@webboostpartner.nl"
                  className="text-brand underline underline-offset-4"
                >
                  info@webboostpartner.nl
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
