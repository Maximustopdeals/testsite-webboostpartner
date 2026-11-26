"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cookie-consent";
const GTM_ID = "GTM-PSM987PS";

type Consent = "all" | "functional";

type DataLayerEvent = Record<string, unknown> | IArguments;

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    gtag: (...args: unknown[]) => void;
  }
}

function loadGoogleTagManager() {
  if (typeof window === "undefined") return;

  // Voorkom dubbele initialisatie.
  if (document.getElementById("google-tag-manager")) return;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args as unknown as DataLayerEvent);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
  });

  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = "google-tag-manager";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

  document.head.appendChild(script);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored === "all") {
        loadGoogleTagManager();
        setVisible(false);
        return;
      }

      if (stored === "functional") {
        setVisible(false);
        return;
      }

      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleConsent = (consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, consent);
    } catch {
      // Zonder beschikbare opslag geen analytische scripts laden.
      if (consent === "all") return;
    }

    if (consent === "all") {
      loadGoogleTagManager();
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-[60] bg-background/95 backdrop-blur-md border border-border-subtle shadow-xl rounded-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="shrink-0 w-10 h-10 bg-brand/10 text-brand rounded-full grid place-items-center">
            <Cookie size={20} strokeWidth={2} />
          </div>

          <div className="flex-1">
            <h2
              id="cookie-banner-title"
              className="font-serif text-lg text-foreground mb-2"
            >
              Cookies
            </h2>

            <p
              id="cookie-banner-desc"
              className="text-sm text-foreground-muted leading-relaxed font-sans"
            >
              Wij gebruiken functionele cookies om de website goed te laten
              werken. Met uw toestemming gebruiken wij daarnaast analytische
              cookies om het gebruik van onze website te begrijpen. Lees meer
              in ons{" "}
              <Link
                href="/cookiebeleid"
                className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors font-medium"
              >
                cookiebeleid
              </Link>.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleConsent("functional")}
            aria-label="Sluiten en alleen functionele cookies gebruiken"
            className="shrink-0 text-foreground-muted hover:text-foreground transition-colors p-1"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => handleConsent("all")}
            className="flex-1 bg-brand text-white font-sans font-medium text-sm px-4 py-3 rounded-sm hover:bg-brand-hover transition-colors"
          >
            Alles accepteren
          </button>

          <button
            type="button"
            onClick={() => handleConsent("functional")}
            className="flex-1 bg-background-secondary text-foreground font-sans font-medium text-sm px-4 py-3 rounded-sm hover:bg-border-subtle transition-colors"
          >
            Alleen functioneel
          </button>
        </div>
      </div>
    </div>
  );
}
