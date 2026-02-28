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
      className="py-16 md:py-24 bg-white"
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
              className="relative text-center animate-on-scroll"
            >
              <div className="w-14 h-14 rounded-full bg-accent-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                {step.title}
              </h3>
              <p className="text-primary-600 text-sm">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-accent-200" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
