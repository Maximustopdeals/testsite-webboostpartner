import type { Metadata } from "next";
import Script from "next/script";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const GTM_ID = "GTM-PSM987PS";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webboostpartner.nl"),

  title: {
    default: "Webdesign Rotterdam | Website laten maken | WebBoost Partner",
    template: "%s | WebBoost Partner",
  },

  description:
    "Een professionele website laten maken in Rotterdam? WebBoost Partner bouwt snelle Next.js-websites voor zzp en mkb, met SEO, maatwerk en een vaste prijs.",

  applicationName: "WebBoost Partner",

  verification: {
    google: "OjFfp_u3mWFOSFreofiGa1Pz4fgKv1h8X_xHCbr1l7Y",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "WebBoost Partner",
    title: "WebBoost Partner | Webdesign Rotterdam",
    description:
      "Professionele Next.js-websites voor zzp en mkb in Rotterdam en omgeving.",
    url: "https://www.webboostpartner.nl",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "WebBoost Partner - Webdesign Rotterdam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WebBoost Partner | Webdesign Rotterdam",
    description:
      "Professionele Next.js-websites voor zzp en mkb in Rotterdam en omgeving.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${dmSerif.variable} ${manrope.variable}`}>
      <head>
        {/* Google Consent Mode v2 en GTM initialisatie */}
        <Script
          id="gtm-consent-init"
          strategy="beforeInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() {
              window.dataLayer.push(arguments);
            };

            var storedConsent = null;

            try {
              storedConsent = localStorage.getItem("cookie-consent");
            } catch (error) {
              storedConsent = null;
            }

            var analyticsConsent =
              storedConsent === "all" ? "granted" : "denied";

            window.gtag("consent", "default", {
              analytics_storage: analyticsConsent,
              ad_storage: "denied",
              ad_user_data: "denied",
              ad_personalization: "denied",
              functionality_storage: "granted",
              personalization_storage: "denied",
              security_storage: "granted",
              wait_for_update: 500
            });

            (function(w,d,s,l,i) {
              w[l] = w[l] || [];
              w[l].push({
                "gtm.start": new Date().getTime(),
                event: "gtm.js"
              });

              var firstScript = d.getElementsByTagName(s)[0];
              var newScript = d.createElement(s);
              var dataLayerParam = l !== "dataLayer"
                ? "&l=" + l
                : "";

              newScript.async = true;
              newScript.src =
                "https://www.googletagmanager.com/gtm.js?id=" +
                i + dataLayerParam;

              firstScript.parentNode.insertBefore(
                newScript,
                firstScript
              );
            })(window,document,"script","dataLayer","${GTM_ID}");
          `}
        </Script>
      </head>

      <body className="bg-background text-foreground font-sans antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen">
        {/* Google Tag Manager noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>

        {/* Global structured data */}
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
                    "WebBoost Partner is een Nederlands webbureau dat razendsnelle Next.js-websites bouwt voor ZZP en MKB in Rotterdam en omgeving.",
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
              ],
            }),
          }}
        />

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        <FloatingActions />
      </body>
    </html>
  );
}
