
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  UserRound,
  Globe,
  MessageSquare,
} from "lucide-react";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  testid: string;
  placeholder?: string;
  autoComplete?: string;
}

interface FormStatus {
  status: "idle" | "loading" | "success" | "error";
  errorMsg: string;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  testid,
  placeholder,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-sans text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="ml-1 text-brand">*</span>}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        data-testid={testid}
        className="w-full rounded-sm border border-border-subtle bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-foreground-muted/50 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

const isAnalyseIntent = (value: string | null): boolean =>
  value === "analyse" ||
  value === "quickscan" ||
  value === "quickscan_analyse" ||
  value === "migratie_analyse" ||
  value === "website_analyse";

const isOfferteIntent = (value: string | null): boolean =>
  value === "offerte" || (value ? value.startsWith("pakket_") : false);

const isAdviesIntent = (value: string | null): boolean =>
  value === "advies" || value === "gesprek" || value === "adviesgesprek";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent");
  const isWebsiteCheck = isAnalyseIntent(intent);

  const [analyseAanvraag, setAnalyseAanvraag] = useState(() =>
    isAnalyseIntent(intent)
  );
  const [offerteAanvraag, setOfferteAanvraag] = useState(() =>
    isOfferteIntent(intent)
  );
  const [adviesAanvraag, setAdviesAanvraag] = useState(() =>
    isAdviesIntent(intent)
  );

  const [status, setStatus] = useState<FormStatus["status"]>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setAnalyseAanvraag(isAnalyseIntent(intent));
    setOfferteAanvraag(isOfferteIntent(intent));
    setAdviesAanvraag(isAdviesIntent(intent));
  }, [intent]);

  const getTitle = (): string => {
    if (isWebsiteCheck) return "Vraag een gratis websitecheck aan";
    if (isOfferteIntent(intent)) return "Vraag een voorstel op maat aan";
    if (isAdviesIntent(intent)) return "Plan een vrijblijvend adviesgesprek";
    return "Vertel mij over uw plannen";
  };

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    setStatus("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    if (isWebsiteCheck) {
      const toelichting = String(data.get("toelichting") || "").trim();

      data.set(
        "bericht",
        toelichting || "Aanvraag voor een gratis websitecheck."
      );

      data.set("intentie_analyse", "JA");
      data.set("intentie_offerte", "NEE");
      data.set("intentie_advies", "NEE");
    } else {
      data.set("intentie_analyse", analyseAanvraag ? "JA" : "NEE");
      data.set("intentie_offerte", offerteAanvraag ? "JA" : "NEE");
      data.set("intentie_advies", adviesAanvraag ? "JA" : "NEE");
    }

    if (intent) {
      data.set("cta_bron", intent);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setErrorMsg(
          result?.error ||
            "Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();

      setAnalyseAanvraag(false);
      setOfferteAanvraag(false);
      setAdviesAanvraag(false);
    } catch {
      setErrorMsg(
        "Er kon geen verbinding worden gemaakt. Controleer uw internetverbinding en probeer het opnieuw."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-sm border border-border-subtle bg-background-secondary p-8 shadow-soft sm:p-12"
        data-testid="contact-form-success"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          size={48}
          className="mb-6 text-brand"
          strokeWidth={1.5}
        />

        <h2 className="mb-4 font-serif text-3xl text-foreground">
          Bedankt voor uw aanvraag!
        </h2>

        <p className="max-w-prose font-sans text-base leading-relaxed text-foreground-muted">
          {isWebsiteCheck
            ? "Uw aanvraag voor de gratis websitecheck is goed ontvangen. Ik bekijk uw website persoonlijk en stuur u doorgaans binnen één tot twee werkdagen mijn bevindingen."
            : "Uw bericht is goed ontvangen. Ik neem persoonlijk contact met u op, doorgaans binnen één tot twee werkdagen. U hoort rechtstreeks van mij."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-sm border border-border-subtle bg-background p-6 shadow-soft sm:p-10"
      data-testid="contact-form"
    >
      <div className="mb-2 border-b border-border-subtle pb-6">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Persoonlijk contact
        </p>

        <h2 className="mb-3 font-serif text-3xl text-foreground">
          {getTitle()}
        </h2>

        <p className="font-sans text-sm leading-relaxed text-foreground-muted">
          {isWebsiteCheck
            ? "Laat uw gegevens achter. Ik bekijk uw website persoonlijk op snelheid, techniek en vindbaarheid. U ontvangt mijn bevindingen rechtstreeks per e-mail."
            : "Vertel kort waar u naar op zoek bent. Ik bekijk uw aanvraag persoonlijk en reageer doorgaans binnen één tot twee werkdagen. Vrijblijvend en zonder verplichtingen."}
        </p>

        <p className="mt-4 font-sans text-xs text-foreground-muted">
          Velden met een <span className="font-semibold text-brand">*</span>{" "}
          zijn verplicht.
        </p>
      </div>

      {/* Contactgegevens */}
      <section aria-labelledby="contactgegevens-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
            <UserRound size={18} />
          </div>

          <h3
            id="contactgegevens-heading"
            className="font-serif text-xl text-foreground"
          >
            Uw contactgegevens
          </h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Naam"
            name="naam"
            required
            testid="field-naam"
            placeholder="Uw naam"
            autoComplete="name"
          />

          <Field
            label="Bedrijfsnaam"
            name="bedrijf"
            testid="field-bedrijf"
            placeholder="Naam van uw bedrijf"
            autoComplete="organization"
          />

          <Field
            label="E-mailadres"
            name="email"
            type="email"
            required
            testid="field-email"
            placeholder="naam@bedrijf.nl"
            autoComplete="email"
          />

          {!isWebsiteCheck && (
            <Field
              label="Telefoonnummer"
              name="telefoon"
              type="tel"
              testid="field-telefoon"
              placeholder="06 12345678"
              autoComplete="tel"
            />
          )}
        </div>
      </section>

      <div className="border-t border-border-subtle" />

      {/* Websitegegevens */}
      <section aria-labelledby="website-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
            <Globe size={18} />
          </div>

          <div>
            <h3
              id="website-heading"
              className="font-serif text-xl text-foreground"
            >
              Uw website
            </h3>

            <p className="mt-1 font-sans text-xs text-foreground-muted">
              {isWebsiteCheck
                ? "Vul het adres in van de website die u wilt laten controleren."
                : "Alleen invullen als u al een website heeft."}
            </p>
          </div>
        </div>

        <Field
          label="Websiteadres"
          name="website_url"
          type={isWebsiteCheck ? "url" : "text"}
          required={isWebsiteCheck}
          testid="field-website"
          placeholder={
            isWebsiteCheck
              ? "https://www.uwbedrijf.nl"
              : "www.uwbedrijf.nl"
          }
        />
      </section>

      {isWebsiteCheck ? (
        <>
          <div className="border-t border-border-subtle" />

          {/* Optionele toelichting */}
          <section aria-labelledby="toelichting-heading" className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                <MessageSquare size={18} />
              </div>

              <h3
                id="toelichting-heading"
                className="font-serif text-xl text-foreground"
              >
                Heeft u nog een toelichting?
              </h3>
            </div>

            <div>
              <label
                htmlFor="toelichting"
                className="mb-2 block font-sans text-sm font-medium text-foreground"
              >
                Uw toelichting{" "}
                <span className="text-xs font-normal text-foreground-muted">
                  (optioneel)
                </span>
              </label>

              <textarea
                id="toelichting"
                name="toelichting"
                maxLength={5000}
                rows={4}
                placeholder="Zijn er specifieke punten waar u benieuwd naar bent? Dan kunt u dat hier aangeven."
                className="w-full resize-y rounded-sm border border-border-subtle bg-background px-4 py-3.5 text-sm leading-relaxed text-foreground outline-none transition-all placeholder:text-foreground-muted/50 focus:border-brand focus:ring-2 focus:ring-brand/20"
                data-testid="field-toelichting"
              />
            </div>
          </section>
        </>
      ) : (
        <>
          <div className="border-t border-border-subtle" />

          {/* Aanvraag */}
          <section aria-labelledby="aanvraag-heading" className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                <MessageSquare size={18} />
              </div>

              <h3
                id="aanvraag-heading"
                className="font-serif text-xl text-foreground"
              >
                Waarmee kan ik u helpen?
              </h3>
            </div>

            <div>
              <label
                htmlFor="bericht"
                className="mb-2 block font-sans text-sm font-medium text-foreground"
              >
                Uw bericht <span className="text-brand">*</span>
              </label>

              <textarea
                id="bericht"
                name="bericht"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="Vertel kort iets over uw bedrijf, uw website of uw plannen. Waar kan ik u bij helpen?"
                className="w-full resize-y rounded-sm border border-border-subtle bg-background px-4 py-3.5 text-sm leading-relaxed text-foreground outline-none transition-all placeholder:text-foreground-muted/50 focus:border-brand focus:ring-2 focus:ring-brand/20"
                data-testid="field-bericht"
              />

              <p className="mt-2 font-sans text-xs text-foreground-muted">
                Een korte toelichting is voldoende om uw aanvraag goed te
                kunnen beoordelen.
              </p>
            </div>
          </section>

          {/* Gewenste startmethode */}
          <section
            aria-labelledby="startmethode-heading"
            className="space-y-5 rounded-sm border border-border-subtle bg-background-secondary p-5 sm:p-6"
          >
            <div>
              <h3
                id="startmethode-heading"
                className="font-sans text-sm font-semibold text-foreground"
              >
                Hoe wilt u beginnen?
              </h3>

              <p className="mt-1 font-sans text-xs leading-relaxed text-foreground-muted">
                Selecteer wat op dit moment bij uw vraag past. Meerdere keuzes
                zijn mogelijk.
              </p>
            </div>

            <label className="group flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={analyseAanvraag}
                onChange={(event) =>
                  setAnalyseAanvraag(event.target.checked)
                }
                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-brand"
                data-testid="intent-analyse"
              />

              <span className="font-sans text-sm text-foreground transition-colors group-hover:text-brand">
                <strong className="font-semibold">
                  Gratis website-analyse
                </strong>

                <span className="mt-1 block text-xs leading-relaxed text-foreground-muted">
                  Ontvang een heldere analyse van uw huidige website en ontdek
                  waar kansen liggen.
                </span>
              </span>
            </label>

            <label className="group flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={offerteAanvraag}
                onChange={(event) =>
                  setOfferteAanvraag(event.target.checked)
                }
                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-brand"
                data-testid="intent-offerte"
              />

              <span className="font-sans text-sm text-foreground transition-colors group-hover:text-brand">
                <strong className="font-semibold">Voorstel op maat</strong>

                <span className="mt-1 block text-xs leading-relaxed text-foreground-muted">
                  Ontvang een helder projectvoorstel met vooraf inzicht in de
                  investering.
                </span>
              </span>
            </label>

            <label className="group flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={adviesAanvraag}
                onChange={(event) =>
                  setAdviesAanvraag(event.target.checked)
                }
                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-brand"
                data-testid="intent-advies"
              />

              <span className="font-sans text-sm text-foreground transition-colors group-hover:text-brand">
                <strong className="font-semibold">
                  Vrijblijvend adviesgesprek
                </strong>

                <span className="mt-1 block text-xs leading-relaxed text-foreground-muted">
                  Bespreek uw plannen rechtstreeks met mij, telefonisch of op
                  locatie in de regio.
                </span>
              </span>
            </label>
          </section>

          {/* Herkomst */}
          <div>
            <label
              htmlFor="bron"
              className="mb-2 block font-sans text-sm font-medium text-foreground"
            >
              Hoe heeft u WebBoost Partner gevonden?
              <span className="ml-2 text-xs font-normal text-foreground-muted">
                (optioneel)
              </span>
            </label>

            <select
              id="bron"
              name="bron"
              defaultValue=""
              data-testid="field-bron"
              className="w-full rounded-sm border border-border-subtle bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-all focus:border-brand focus:ring-2 focus:ring-brand/20"
            >
              <option value="">Maak een keuze</option>
              <option value="Google">Google</option>
              <option value="Vrienden/kennissen">
                Via vrienden of kennissen
              </option>
              <option value="Eigen netwerk">Via mijn eigen netwerk</option>
              <option value="Social media">Social media</option>
              <option value="Anders">Anders</option>
            </select>
          </div>
        </>
      )}

      {status === "error" && (
        <div
          className="flex items-start gap-3 rounded-sm border border-red-200 bg-red-50 p-4"
          data-testid="contact-form-error"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle
            size={20}
            className="mt-0.5 shrink-0 text-red-600"
          />

          <p className="text-sm font-medium leading-relaxed text-red-800">
            {errorMsg}
          </p>
        </div>
      )}

      <div className="space-y-4 border-t border-border-subtle pt-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-8 py-4 font-sans text-base font-semibold text-white transition-all duration-300 hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Bezig met verzenden...
            </>
          ) : (
            <>
              {isWebsiteCheck
                ? "Vraag mijn gratis websitecheck aan"
                : "Vrijblijvend contact opnemen"}
              <Send size={18} />
            </>
          )}
        </button>

        <p className="text-center font-sans text-xs leading-relaxed text-foreground-muted">
          Uw gegevens worden vertrouwelijk behandeld en gebruikt om contact
          met u op te nemen over uw aanvraag.
        </p>
      </div>
    </form>
  );
}
