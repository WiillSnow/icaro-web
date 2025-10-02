// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

// === EDITA AQUÍ SI CAMBIA EL DOMINIO O EL TELÉFONO ===
const DOMAIN = "https://icarosolar.mx";        // <-- DOMINIO AQUÍ
const PHONE_DISPLAY = "+52 999 214 4601";      // <-- TEL (formato visible)
const PHONE_E164 = "+529992144601";            // <-- TEL (E.164 para JSON-LD/links)
// =====================================================

export const metadata: Metadata = {
  title: "ÍCARO SOLAR | Paneles solares en Mérida",
  description:
    "Ahorra en tu recibo de luz con sistemas fotovoltaicos a medida. Trámite ante CFE, financiamiento y garantías claras.",
  applicationName: "ÍCARO SOLAR",
  metadataBase: new URL(DOMAIN),
  openGraph: {
    title: "ÍCARO SOLAR | Paneles solares en Mérida",
    description:
      "Ahorra en tu recibo de luz con sistemas fotovoltaicos a medida. Trámite ante CFE, financiamiento y garantías claras.",
    url: DOMAIN,
    siteName: "ÍCARO SOLAR",
    images: [{ url: "/img/icaro-color.png"}],
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: DOMAIN,
  },
  twitter: {
    card: "summary_large_image",
    title: "ÍCARO SOLAR | Paneles solares en Mérida",
    description:
      "Instalación profesional, trámite CFE y garantías claras.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // (Opcional) Si ya tienes GTM: pon tu ID aquí
  const GTM_ID = ""; // p.ej. "GTM-ABC1234"

  return (
    <html lang="es">
      <head>
        {/* (Opcional) Preload de fuentes si las tienes en /public/fonts */}
        {/* <link rel="preload" href="/fonts/Effra-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}

        {/* JSON-LD: LocalBusiness con tu dominio y teléfono */}
        <Script id="ld-local" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ÍCARO SOLAR",
            url: DOMAIN,                 // <-- DOMINIO AQUÍ
            telephone: PHONE_DISPLAY,    // <-- TEL AQUÍ (humano)
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mérida",
              addressRegion: "Yucatán",
              addressCountry: "MX",
            },
            areaServed: ["Mérida", "Yucatán", "Península de Yucatán"],
            sameAs: [], // agrega redes si quieres
          })}
        </Script>

        {/* Tu JS legacy (clon 1:1) */}
        <Script src="/legacy.js" strategy="afterInteractive" />

        {/* (Opcional) GTM */}
        {GTM_ID && (
          <>
            <Script id="gtm-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'gtm.js'});`}
            </Script>
            <Script id="gtm" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
          </>
        )}
      </head>
      <body>
        {/* (Opcional) no-script de GTM */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}
      </body>
    </html>
  );
}
