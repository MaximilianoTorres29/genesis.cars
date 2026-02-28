/**
 * Sección "¿Por qué Génesis Cars?" con 4 cards de beneficios.
 */
const benefits = [
  {
    icon: '🔍',
    title: 'Autos revisados y seleccionados',
    description: 'Cada vehículo pasa por una revisión exhaustiva. Solo ofrecemos unidades en las que confiamos.',
  },
  {
    icon: '📄',
    title: 'Documentación clara y al día',
    description: 'Toda la papeleración en orden. Sin sorpresas: te mostramos el historial y el estado legal.',
  },
  {
    icon: '🤝',
    title: 'Atención personalizada',
    description: 'Te asesoramos de punta a punta. Resolvemos dudas y te acompañamos hasta la entrega.',
  },
  {
    icon: '🚘',
    title: 'Vehículos listos para transferir',
    description: 'Proceso ágil y transparente. Coordinamos todo para que puedas circular con tranquilidad.',
  },
];

export function WhyGenesis() {
  return (
    <section
      id="por-que-genesis"
      className="py-16 md:py-24 bg-white"
      aria-labelledby="why-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="why-title"
          className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4 animate-on-scroll"
        >
          ¿Por qué Génesis Cars?
        </h2>
        <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12 animate-on-scroll">
          Transparencia, calidad y un trato cercano en cada paso
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300 animate-on-scroll group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                {item.title}
              </h3>
              <p className="text-primary-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
