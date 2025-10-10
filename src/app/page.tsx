// src/app/page.tsx
import SeoJsonLd from "@/components/SeoJsonLd";
import markup from "@/legacy/markup";
import CtaStripe from "@/components/CtaStripe";
import CotizacionModern from "@/components/CotizacionModern";

export default function Page() {
  const SLOT = "<!-- REACT_CTA_SLOT -->";
  const [before, after] = markup.includes(SLOT) ? markup.split(SLOT) : [markup, ""];

  return (
    <>
      {/* JSON-LD específico de la página (Servicios, FAQs, LocalBusiness, etc.) */}
      <SeoJsonLd />

      {/* Contenido legacy (antes del slot) */}
      <div dangerouslySetInnerHTML={{ __html: before }} />

      {/* Franja CTA */}
      <CtaStripe />

      {/* Formulario de cotización */}
      <CotizacionModern />

      {/* Contenido legacy (después del slot) */}
      <div dangerouslySetInnerHTML={{ __html: after }} />
    </>
  );
}


