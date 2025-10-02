// src/app/gracias/page.tsx
import type { Metadata } from "next";
import ThankYouTracker from "./tracker";

export const metadata: Metadata = {
  title: "Gracias | ÍCARO SOLAR",
  description: "Hemos recibido tu solicitud. Pronto nos pondremos en contacto.",
  robots: { index: false, follow: false }, // no indexar
};

export default function GraciasPage() {
  return (
    <main>
      {/* Dispara evento de conversión al cargar */}
      <ThankYouTracker />

      <div className="tw-wrap" style={{ paddingTop: "72px", paddingBottom: "96px" }}>
        <div className="rounded-2xl border shadow-sm bg-white thanks-card">
          {/* Logo arriba (usa el tuyo en /public/img/) */}
          <div className="thanks-logo">
            <img src="/img/icaro-color.png" alt="ÍCARO SOLAR" height={40} />
          </div>

          {/* Check animado */}
          <div className="thanks-check">
            <svg className="checkmark" viewBox="0 0 52 52" aria-hidden="true">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14 27l7 7 16-16" />
            </svg>
          </div>

          <div className="thanks-text">
            <h1 className="thanks-title">¡Gracias! Hemos recibido tu solicitud</h1>
            <p className="thanks-p">
              Nuestro equipo revisará tu información y te contactará muy pronto.
            </p>
            <p className="thanks-p">
              Si prefieres atención inmediata, escríbenos por WhatsApp.
            </p>

            <div className="thanks-actions">
              <a href="/" className="thanks-btn-outline">Volver al inicio</a>
              <a
                href="https://wa.me/529999699146"
                target="_blank"
                rel="noopener noreferrer"
                className="thanks-btn-wa"
              >
                WhatsApp ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
