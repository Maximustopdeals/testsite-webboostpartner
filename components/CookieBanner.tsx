"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cookie-consent";
const GTM_ID = "GTM-PSM987PS";

type Consent = "all" | "functional";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function initializeGoogleTagManager() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.gtag =
    window.gtag ||
    function (...args: unknown[]) {
      window.dataLayer?.push(args);
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

  if (document.getElementById("google-tag-manager")) return;

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

function updateAnalyticsConsent(consent: Consent) {
  if (typeof window === "undefined") return;

  if (consent === "all") {
    // DEZE REGEL IS CRUCIAAL VOOR NIEUWE BEZOEKERS
    initializeGoogleTagManager(); 
    
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    return;
  }

  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored === "all") {
        initializeGoogleTagManager();
        updateAnalyticsConsent("all");
      }

      setVisible(stored !== "all" && stored !== "functional");
    } catch {
      setVisible(true);
    }

    setInitialized(true);
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      setVisible(true);
    };

    window.addEventListener(
      "open-cookie-preferences",
      handleOpenPreferences
    );

    return () => {
      window.removeEventListener(
        "open-cookie-preferences",
        handleOpenPreferences
      );
    };
  }, []);

  const handleConsent = (consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, consent);
    } catch {
      if (consent === "all") return;
    }

    updateAnalyticsConsent(consent);
    setVisible(false);
  };

  if (!initialized || !visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 right-6 z-[60] rounded-md border border-border-subtle bg-background/95 shadow-xl backdrop-blur-md sm:right-auto sm:max-w-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="p-6">
        <div className="mb-5 flex items-start gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
            <Cookie size={20} strokeWidth={2} />
          </div>

          <div className="flex-1">
            <h2
              id="cookie-banner-title"
              className="mb-2 font-serif text-lg text-foreground"
            >
              Cookievoorkeuren
            </h2>

            <p
              id="cookie-banner-desc"
              className="font-sans text-sm leading-relaxed text-foreground-muted"
            >
              Wij gebruiken functionele cookies om de website goed te laten
              werken. Met uw toestemming gebruiken wij daarnaast analytische
              cookies om het gebruik van onze website te begrijpen. Lees meer
              in ons{" "}
              <Link
                href="/cookiebeleid"
                className="font-medium text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:decoration-brand"
              >
                cookiebeleid
              </Link>.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleConsent("functional")}
            aria-label="Alleen functionele cookies gebruiken"
            className="shrink-0 p-1 text-foreground-muted transition-colors hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => handleConsent("all")}
            className="flex-1 rounded-sm bg-brand px-4 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Alles accepteren
          </button>

          <button
            type="button"
            onClick={() => handleConsent("functional")}
            className="flex-1 rounded-sm bg-background-secondary px-4 py-3 font-sans text-sm font-medium text-foreground transition-colors hover:bg-border-subtle"
          >
            Alleen functioneel
          </button>
        </div>
      </div>
    </div>
  );
}