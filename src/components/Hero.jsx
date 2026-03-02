import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';

/**
 * Hero section: título principal, subtítulo y CTA WhatsApp.
 * Gradiente con toque celeste y animación suave.
 */
export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Luz celeste superior (mesh) */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-gradient-to-b from-accent-500/20 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <div className="mb-8 hero-fade-in flex justify-center" style={{ animationDelay: '0.15s' }}>
          <Logo className="text-3xl sm:text-4xl !justify-center" />
        </div>

        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight hero-fade-in drop-shadow-sm"
          style={{ animationDelay: '0.35s' }}
        >
          Vehículos usados seleccionados, con total confianza
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light hero-fade-in" style={{ animationDelay: '0.55s' }}>
          Te acompañamos en todo el proceso para que compres seguro y sin vueltas
        </p>

        <div className="hero-fade-in" style={{ animationDelay: '0.75s' }}>
          <WhatsAppButton className="!px-8 !py-4 text-lg rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-shadow duration-300" />
        </div>
      </div>
    </section>
  );
}
