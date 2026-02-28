import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';

/**
 * Hero section: título principal, subtítulo y CTA WhatsApp.
 * Fondo azul oscuro, diseño impactante.
 */
export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-primary-800/30" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        {/* Logo centrado en el Hero */}
        <div className="mb-8 hero-fade-in flex justify-center" style={{ animationDelay: '0.2s' }}>
          <Logo className="text-3xl sm:text-4xl !justify-center" />
        </div>

        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight hero-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Vehículos usados seleccionados, con total confianza
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light hero-fade-in" style={{ animationDelay: '0.6s' }}>
          Te acompañamos en todo el proceso para que compres seguro y sin vueltas
        </p>

        <div className="hero-fade-in" style={{ animationDelay: '0.8s' }}>
          <WhatsAppButton className="!px-8 !py-4 text-lg rounded-xl" />
        </div>
      </div>
    </section>
  );
}
