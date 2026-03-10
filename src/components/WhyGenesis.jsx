export function WhyGenesis() {
  const items = [
    { title: 'Autos revisados y seleccionados', desc: 'Cada vehículo pasa por una revisión exhaustiva. Solo ofrecemos unidades en las que confiamos.', icon: 'search' },
    { title: 'Documentación clara y al día', desc: 'Toda la papeleración en orden. Sin sorpresas: te mostramos el historial y el estado legal.', icon: 'document' },
    { title: 'Atención personalizada', desc: 'Te asesoramos de punta a punta. Resolvemos dudas y te acompañamos hasta la entrega.', icon: 'handshake' },
    { title: 'Vehículos listos para transferir', desc: 'Proceso ágil y transparente. Coordinamos todo para que puedas circular con tranquilidad.', icon: 'car' }
  ];

  const icons = {
    search: (
      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
    document: (
      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    handshake: (
      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>
    ),
    car: (
      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 11-4 0 2 2 0 014 0zM16 17a2 2 0 11-4 0 2 2 0 014 0zM5.5 17H4v-4.5a2.5 2.5 0 012.5-2.5h9a2.5 2.5 0 012.5 2.5V17h-1.5M4 12.5h16" /></svg>
    )
  };

  return (
    <section id="por-que-nosotros" className="py-10 sm:py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="animate-slide-up-lg" style={{ animationFillMode: 'backwards' }}>
            <h2 className="text-xl sm:text-section-title font-bold text-primary-900 text-center animate-title-glow">¿Por qué L&M Automotores?</h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 origin-center animate-line-in" />
          </div>
          <p className="text-section-subtitle text-primary-600 text-center mt-4 mb-2 px-2 animate-slide-up" style={{ animationFillMode: 'backwards', animationDelay: '200ms' }}>Transparencia, calidad y un trato cercano en cada paso</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="group/card p-4 sm:p-5 rounded-xl bg-white border border-primary-100 shadow-xl hover:shadow-[0_12px_40px_rgba(15,23,42,0.18),0_0_0_1px_rgba(251,191,36,0.2),0_0_20px_rgba(245,158,11,0.12)] hover:-translate-y-1 hover:border-accent-300/60 transition-all duration-300 ease-out animate-scale-in"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'backwards' }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center mb-3 text-accent-600 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
                {icons[item.icon]}
              </div>
              <h3 className="text-sm font-semibold text-primary-900 leading-tight group-hover/card:text-accent-700 transition-colors duration-200">{item.title}</h3>
              <p className="mt-1.5 text-xs text-primary-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
