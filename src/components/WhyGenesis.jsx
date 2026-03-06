/** Iconos SVG para beneficios */
const BenefitIcons = {
  search: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  document: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  handshake: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  car: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 11-4 0 2 2 0 014 0zM16 17a2 2 0 11-4 0 2 2 0 014 0zM12 8h2m-4 0h4M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  ),
};

const benefits = [
  { iconKey: 'search', title: 'Autos revisados y seleccionados', description: 'Cada vehículo pasa por una revisión exhaustiva. Solo ofrecemos unidades en las que confiamos.' },
  { iconKey: 'document', title: 'Documentación clara y al día', description: 'Toda la papeleración en orden. Sin sorpresas: te mostramos el historial y el estado legal.' },
  { iconKey: 'handshake', title: 'Atención personalizada', description: 'Te asesoramos de punta a punta. Resolvemos dudas y te acompañamos hasta la entrega.' },
  { iconKey: 'car', title: 'Vehículos listos para transferir', description: 'Proceso ágil y transparente. Coordinamos todo para que puedas circular con tranquilidad.' },
];

export function WhyGenesis() {
  return (
    <section
      id="por-que-nosotros"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50/30"
      aria-labelledby="why-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4 animate-on-scroll">
          ¿Por qué L&M Automotores?
        </h2>
        <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12 animate-on-scroll">
          Transparencia, calidad y un trato cercano en cada paso
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="relative p-6 rounded-2xl bg-white border border-primary-100 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.05),0_8px_16px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.15),0_0_0_1px_rgba(251,191,36,0.12),0_20px_40px_-10px_rgba(245,158,11,0.15)] hover:border-accent-300/60 hover:-translate-y-0.5 transition-all duration-300 animate-on-scroll group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-4 shadow-inner group-hover:bg-orange-50 group-hover:text-orange-500 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                <span className="w-6 h-6 block">{BenefitIcons[item.iconKey]}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-accent-700 transition-colors">
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
