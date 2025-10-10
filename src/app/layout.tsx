
// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

// === EDITA AQUÍ SI CAMBIA EL DOMINIO O EL TELÉFONO ===
const DOMAIN = "https://www.icarosolar.mx";   // usa www como canónico
const PHONE_DISPLAY = "+52 999 214 4601";     // visible
const PHONE_E164 = "+529992144601";           // E.164 p/JSON-LD y links tel:
// ================================================

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  applicationName: "ÍCARO SOLAR",
  metadataBase: new URL(DOMAIN),
  title: "ÍCARO SOLAR | Paneles solares en Mérida",
  description:
    "Ahorra en tu recibo de luz con sistemas fotovoltaicos a medida. Trámite ante CFE, financiamiento y garantías claras.",
  alternates: {
    // Con metadataBase arriba, usa ruta canónica:
    canonical: "/", 
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "ÍCARO SOLAR",
    url: DOMAIN,
    title: "ÍCARO SOLAR | Paneles solares en Mérida",
    description:
      "Ahorra en tu recibo de luz con sistemas fotovoltaicos a medida. Trámite ante CFE, financiamiento y garantías claras.",
    images: [
      {
        url: "/img/og-hero.jpg", // <-- crea esta imagen 1200x630 en /public/img
        width: 1200,
        height: 630,
        alt: "ÍCARO SOLAR — Paneles solares en Mérida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ÍCARO SOLAR | Paneles solares en Mérida",
    description:
      "Instalación profesional, trámite CFE y garantías claras.",
    images: ["/img/og-hero.jpg"], // misma OG sirve para Twitter
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = ""; // p.ej. "GTM-ABC1234" si lo usas

  return (
    <html lang="es">
      <head>
        {/* (Opcional) Preload de fuentes */}
        {/* <link rel="preload" href="/fonts/Effra-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}

        {/* JSON-LD LocalBusiness mejorado */}
        <Script id="ld-local" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ÍCARO SOLAR",
            url: DOMAIN,
            image: `${DOMAIN}/img/icaro-color.png`, // logo grande o foto
            telephone: PHONE_E164, // en E.164
            email: "contacto@icarosolar.mx",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mérida",
              addressRegion: "Yucatán",
              addressCountry: "MX",
            },
            areaServed: ["Mérida", "Yucatán", "Península de Yucatán"],
            geo: { "@type": "GeoCoordinates", latitude: 20.97, longitude: -89.62 },
            priceRange: "$$",
            openingHours: "Mo-Sa 09:00-18:00",
            sameAs: [
              // agrega si tienes redes:
              // "https://www.facebook.com/tu_pagina",
              // "https://www.instagram.com/tu_pagina",
            ],
          })}
        </Script>

        {/* JS legacy */}
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
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0" width="0" style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
