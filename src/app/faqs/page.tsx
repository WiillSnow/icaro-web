// src/app/faqs/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | ÍCARO SOLAR",
  description:
    "Resuelve dudas comunes sobre paneles solares: funcionamiento, mantenimiento, garantías, trámites con CFE y más.",
};

type FAQ = { q: string; a: React.ReactNode };

const faqs: FAQ[] = [
  // ←←← PERSONALIZA AQUÍ: modifica preguntas (q) y respuestas (a)
  {
    q: "¿Los paneles funcionan en días nublados o con lluvia?",
    a: (
      <>
        <p>
          Sí. Los módulos siguen generando con luz difusa, aunque con menor
          producción que a pleno sol.
        </p>
        <p>
          Como referencia, en días muy nublados la generación puede caer a una fracción
          respecto a un día despejado; el porcentaje exacto depende de nubosidad,
          hora y orientación del sistema.
        </p>
      </>
    ),
  },
  {
    q: "¿Seguiré teniendo luz durante un apagón?",
    a: (
      <>
        <p>
          Si tu sistema es <strong>interconectado a CFE</strong> sin baterías,
          el inversor se apaga automáticamente en un corte (anti-islanding).
        </p>
        <p>
          Para tener respaldo necesitas un <strong>inversor híbrido</strong> y
          <strong> baterías</strong> con circuitos críticos respaldados.
        </p>
      </>
    ),
  },
  {
    q: "¿Cuánto duran los paneles?",
    a: (
      <>
        <p>
          Los módulos suelen ofrecer <strong>25 años de garantía de rendimiento</strong>
          (manteniendo ~80–90% de potencia al año 25, según fabricante).
        </p>
        <p>
          La garantía de producto suele ser de <strong>10–12 años</strong> y la
          degradación anual típica ronda ~0.5–1%/año.
        </p>
      </>
    ),
  },
  {
    q: "¿Qué mantenimiento requieren?",
    a: (
      <>
        <p>
          Limpieza <strong>1–2 veces por año</strong> (más frecuente en zonas polvosas o con salitre)
          y <strong>revisión anual</strong> de conexiones/estructuras.
        </p>
        <p>
          Evita hidrolavadoras y abrasivos; usa agua, cepillo suave y seguridad en altura.
        </p>
      </>
    ),
  },
  {
    q: "¿Orientación e inclinación recomendadas en Mérida/Yucatán?",
    a: (
      <>
        <p>
          En el hemisferio norte rinde mejor <strong>orientación sur</strong>.
          Como regla general, la <strong>inclinación cercana a la latitud</strong> funciona muy bien.
        </p>
        <p>
          Para Mérida (~21°N), una inclinación fija alrededor de <strong>~19–22°</strong> suele
          maximizar producción anual (si el techo lo permite).
        </p>
      </>
    ),
  },
  {
    q: "¿Qué pasa si tengo sombras de árboles o tinacos?",
    a: (
      <>
        <p>
          La sombra reduce la energía y puede provocar pérdidas desproporcionadas en cadenas
          de paneles.
        </p>
        <p>
          Se mitiga con <strong>diseño</strong> (ubicación/stringing) y
          <strong> electrónica a nivel de módulo</strong> (optimizadores o microinversores).
        </p>
      </>
    ),
  },
  {
    q: "¿Puedo ampliar el sistema después?",
    a: (
      <>
        <p>
          Sí, normalmente es posible. Conviene <strong>dejar margen en inversor</strong> o
          considerar un segundo MPPT/string.
        </p>
        <p>
          También se debe validar con CFE una posible actualización del contrato de interconexión
          si aumenta la capacidad instalada.
        </p>
      </>
    ),
  },
  {
    q: "¿Qué garantías se incluyen?",
    a: (
      <>
        <p>
          Típicamente: <strong>paneles</strong> (10–12 años producto y 25 años rendimiento),
          <strong> inversor</strong> (5–12 años según marca/modelo),
          <strong> estructura</strong> (10–20 años) y
          <strong> instalación</strong> (1–2 años).
        </p>
        <p>En tu propuesta detallamos las coberturas específicas.</p>
      </>
    ),
  },
  {
    q: "¿Qué permisos y trámites se requieren con CFE?",
    a: (
      <>
        <p>
          Se gestiona el <strong>Contrato de Interconexión</strong> para Generación Distribuida
          (&lt;0.5&nbsp;MW): solicitud, revisión técnica, inspección (cuando aplique) y
          <strong> medidor bidireccional</strong>.
        </p>
        <p>Nosotros te acompañamos en todo el proceso.</p>
      </>
    ),
  },
  {
    q: "¿Cuál es el ahorro y el retorno de inversión (ROI)?",
    a: (
      <>
        <p>
          Depende de tu <strong>consumo</strong>, tarifa, techo (orientación/sombras) y equipo.
        </p>
        <p>
          Por eso hacemos un <strong>análisis con tu recibo</strong> y te presentamos un
          escenario realista para tu caso.
        </p>
      </>
    ),
  },
];

export default function FAQsPage() {
  return (
    <main>
      {/* espacio superior para no tapar por el header fijo */}
      <div className="pt-24" />

      <section className="faq-wrap">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C5A9D]">
            Preguntas frecuentes
          </h1>
          <div className="h-6" aria-hidden="true"></div>
        </header>

        {/* LISTA FAQ */}
        <div className="faq-list">
          {faqs.map(({ q, a }, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-summary">
                <h2 className="faq-q">{q}</h2>
                <span className="faq-caret">▼</span>
              </summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>

        {/* Acciones al final */}
        <div className="faq-actions">
          <a href="/#cotiza" className="faq-btn-primary">
            Solicitar una cotización
          </a>
          <a href="/" className="faq-btn-outline">
            Volver al inicio
          </a>
        </div>

        {/* espacio inferior */}
        <div className="pb-24" />
      </section>
    </main>
  );
}
