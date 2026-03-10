export function HowToBuy() {
  const steps = [
    { n: 1, title: 'Elegís el vehículo', desc: 'Explorá nuestro catálogo y elegí el auto que más te guste.' },
    { n: 2, title: 'Nos contactás', desc: 'Escribinos por WhatsApp y te respondemos con toda la información.' },
    { n: 3, title: 'Revisamos documentación', desc: 'Te guiamos con la documentación para que todo esté en orden.' },
    { n: 4, title: 'Coordinamos entrega', desc: 'Acordamos día y lugar para que retires tu vehículo con tranquilidad.' },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-20 bg-gradient-to-b from-white to-warm-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="animate-slide-up-lg" style={{ animationFillMode: 'backwards' }}>
            <h2 className="text-xl sm:text-section-title font-bold text-primary-900 text-center animate-title-glow">Cómo comprar</h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 origin-center animate-line-in" />
          </div>
          <p className="text-section-subtitle text-primary-600 text-center mt-4 mb-2 px-2 animate-slide-up" style={{ animationFillMode: 'backwards', animationDelay: '200ms' }}>Un proceso simple y transparente, pensado para vos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group/step flex flex-col items-center text-center p-4 sm:p-5 rounded-xl bg-white/80 border border-primary-100 shadow-xl hover:shadow-[0_12px_40px_rgba(15,23,42,0.18),0_0_0_1px_rgba(251,191,36,0.2),0_0_20px_rgba(245,158,11,0.12)] hover:-translate-y-1.5 hover:border-accent-300/60 transition-all duration-300 ease-out animate-slide-up"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: 'backwards' }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-accent-500 to-accent-600 text-white text-lg font-bold flex items-center justify-center shadow-md shadow-accent-500/30 transition-transform duration-300 group-hover/step:scale-110 group-hover/step:rotate-6">
                {s.n}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-primary-900 leading-tight group-hover/step:text-accent-700 transition-colors duration-200">{s.title}</h3>
              <p className="mt-1.5 text-xs text-primary-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
