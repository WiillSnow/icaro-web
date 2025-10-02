// src/app/page.tsx
import markup from "@/legacy/markup";
import CtaStripe from "@/components/CtaStripe";          // opcional: tu franja CTA
import CotizacionModern from "@/components/CotizacionModern";

export default function Page() {
  const SLOT = "<!-- REACT_CTA_SLOT -->";
  const [before, after] = markup.includes(SLOT) ? markup.split(SLOT) : [markup, ""];

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: before }} />
      {/* Franja CTA (déjala o quítala, como prefieras) */}
      <CtaStripe />
      {/* Formulario con el estilo exacto del snippet (imagen) */}
      <CotizacionModern />
      <div dangerouslySetInnerHTML={{ __html: after }} />
    </>
  );
}


