// src/components/CotizacionModern.tsx
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fontHeading =
  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
const BRAND_BLUE = "#2C5A9D";
const BRAND_GREEN = "#3E8D80";
const BRAND_YELLOW = "#FFC72C";

export default function CotizacionModern() {
  return (
    // margen externo para separar de la franja y del footer
    <div style={{ marginTop: "56px", marginBottom: "72px" }}>
      <section
        id="cotizacion"
        className="bg-white"                 // <-- fondo blanco
        style={{ scrollMarginTop: 96 }}
      >
        {/* compatibilidad con #cotiza */}
        <span id="cotiza" className="block h-0" aria-hidden="true" />

        <div className="tw-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            
            {/* Columna izquierda */}
        <div className="max-w-2xl">
          
    {/* P1 */}
          <h2 class="titulo-cotiza">
          Solicita una cotización
          </h2>
          <div className="h-6" aria-hidden="true"></div>

  {/* P2 y P3 con más espacio entre sí */}
    <p className="mt-5 text-neutral-700 leading-7">
           Cuéntanos sobre tu consumo y te enviaremos una propuesta personalizada. También podemos agendar una visita técnica.
    </p>
    <div className="h-6" aria-hidden="true"></div>
  

    <p className="mt-4 mb-8 text-neutral-700 leading-7">
          Te enviaremos tu propuesta con:
    </p>
    <div className="h-4" aria-hidden="true"></div>

              {/* más espacio entre bullets + más altura de línea */}
              <ul className="mt-0 space-y-4 text-[15px] leading-7">
                {[
                  "Análisis de recibo (histórico bimestral)",
                  "Propuesta técnica y económica",
                  "Tiempo de instalación y ROI estimado",
                  "Opciones de financiamiento",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0 h-4 w-4" style={{ color: BRAND_GREEN }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna derecha: tarjeta con aire interno */}
            <form
              action="https://formspree.io/f/mrbqvybz"
              method="POST"
              className="rounded-2xl bg-white shadow-sm border max-w-2xl w-full ml-auto"
              style={{ padding: "44px 48px" }} // ↑↑ ajusta si quieres aún más aire
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Nombre</label>
                  <input
                    name="Nombre"
                    className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#E5E7EB", caretColor: BRAND_BLUE }}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Correo</label>
                  <input
                    name="Correo"
                    type="email"
                    className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#E5E7EB", caretColor: BRAND_BLUE }}
                    placeholder="tucorreo@dominio.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Teléfono</label>
                  <input
                    name="Teléfono"
                    className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#E5E7EB", caretColor: BRAND_BLUE }}
                    placeholder="10 dígitos"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Tipo de sistema</label>
                  <select
                    name="Tipo de sistema"
                    className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#E5E7EB" }}
                    defaultValue="Interconectado"
                  >
                    <option>Interconectado</option>
                    <option>Híbrido (con baterías)</option>
                    <option>Autónomo (off-grid)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Recibo bimestral (MXN)</label>
                  <input
                    name="Recibo bimestral (MXN)"
                    type="number"
                    className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#E5E7EB", caretColor: BRAND_BLUE }}
                    placeholder="Ej. 2,300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Ciudad</label>
                  <input
                    name="Ciudad"
                    className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#E5E7EB", caretColor: BRAND_BLUE }}
                    placeholder="Mérida, Yucatán"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Mensaje</label>
                  <textarea
                    name="Mensaje"
                    className="mt-1 w-full rounded-xl border px-3 py-2 h-28 focus:outline-none focus:ring-2"
                    style={{ borderColor: "#E5E7EB", caretColor: BRAND_BLUE }}
                    placeholder="Cuéntanos tu objetivo, consumo aproximado o dudas"
                  />
                </div>
                <div className="sm:col-span-2 flex items-center gap-2 text-sm">
                  <input id="consent" type="checkbox" className="h-4 w-4 rounded border" />
                  <label htmlFor="consent" className="text-neutral-600">
                    Acepto ser contactado por ÍCARO SOLAR y el aviso de privacidad.
                  </label>
                </div>
              </div>

              <button className="form-submit">Enviar solicitud <ArrowRight className="h-4 w-4" /></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
