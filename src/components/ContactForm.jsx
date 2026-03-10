export function ContactForm() {
  return (
    <section id="contacto" className="py-10 sm:py-12 md:py-20 bg-gradient-to-b from-warm-50/40 to-primary-50/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="animate-slide-up-lg" style={{ animationFillMode: 'backwards' }}>
            <h2 className="text-xl sm:text-section-title font-bold text-primary-900 text-center animate-title-glow">Contacto</h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 origin-center animate-line-in" />
          </div>
          <p className="text-section-subtitle text-primary-600 text-center mt-4 mb-2 px-2 animate-slide-up" style={{ animationFillMode: 'backwards', animationDelay: '200ms' }}>Escribinos y te respondemos a la brevedad</p>
        </div>
        <form className="space-y-4 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-primary-100 shadow-xl hover:shadow-[0_12px_40px_rgba(15,23,42,0.18),0_0_0_1px_rgba(251,191,36,0.2),0_0_20px_rgba(245,158,11,0.12)] transition-all duration-300">
          <input type="text" placeholder="Nombre" className="w-full px-4 py-3 text-body rounded-xl border border-primary-200 focus:ring-2 focus:ring-accent-400 focus:border-accent-500 outline-none transition-shadow duration-200" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 text-body rounded-xl border border-primary-200 focus:ring-2 focus:ring-accent-400 focus:border-accent-500 outline-none transition-shadow duration-200" />
          <input type="tel" placeholder="Teléfono" className="w-full px-4 py-3 text-body rounded-xl border border-primary-200 focus:ring-2 focus:ring-accent-400 focus:border-accent-500 outline-none transition-shadow duration-200" />
          <textarea placeholder="Mensaje" rows={4} className="w-full px-4 py-3 text-body rounded-xl border border-primary-200 focus:ring-2 focus:ring-accent-400 focus:border-accent-500 outline-none transition-shadow duration-200 resize-none" />
          <button type="submit" className="w-full py-3 text-body rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold shadow-md shadow-accent-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-500/40 active:scale-[0.98]">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
