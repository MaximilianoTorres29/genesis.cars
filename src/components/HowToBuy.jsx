/**
 * Sección "Cómo comprar" con pasos simples del proceso.
 */
const steps = [
  { number: 1, title: 'Elegís el vehículo', description: 'Explorá nuestro catálogo y elegí el auto que más te guste.' },
  { number: 2, title: 'Nos contactás', description: 'Escribinos por WhatsApp y te respondemos con toda la información.' },
  { number: 3, title: 'Revisamos documentación', description: 'Te guiamos con la documentación para que todo esté en orden.' },
  { number: 4, title: 'Coordinamos entrega', description: 'Acordamos día y lugar para que retires tu vehículo con tranquilidad.' },
];

export function HowToBuy() {
  return (
    <section
      id="como-trabajamos"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-warm-50/40"
      aria-labelledby="how-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="how-title"
          className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4 animate-on-scroll"
        >
          Cómo comprar
        </h2>
        <p className="text-primary-600 text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          Un proceso simple y transparente, pensado para vos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center animate-on-scroll group p-6 rounded-2xl bg-white/80 border border-primary-100 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06),0_6px_16px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(15,23,42,0.1),0_0_0_1px_rgba(251,191,36,0.08),0_12px_24px_-6px_rgba(245,158,11,0.12)] hover:border-accent-200/60 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-[0_4px_14px_0_rgba(245,158,11,0.35)] group-hover:scale-105 group-hover:shadow-[0_8px_20px_0_rgba(245,158,11,0.4)] transition-all duration-300 ring-2 ring-white/50">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                {step.title}
              </h3>
              <p className="text-primary-600 text-sm">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-accent-300 to-accent-200" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
