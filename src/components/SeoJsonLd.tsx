"use client";
import Script from "next/script";

export default function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ÍCARO SOLAR",
    "url": "https://www.icarosolar.mx/",
    "image": "https://www.icarosolar.mx/img/icaro-color.png",
    "telephone": "+529992144601",
    "email": "contacto@icarosolar.mx",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mérida",
      "addressRegion": "Yucatán",
      "addressCountry": "MX"
    },
    "areaServed": ["Mérida", "Yucatán", "Península de Yucatán"],
    "geo": { "@type": "GeoCoordinates", "latitude": 20.97, "longitude": -89.62 },
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "$$",
    "sameAs": [
      // agrega si tienes perfiles:
      // "https://www.facebook.com/tu_pagina",
      // "https://www.instagram.com/tu_pagina"
    ]
  };

  return (
    <Script id="ld-localbusiness" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}

