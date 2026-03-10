import { WhatsAppButton } from './WhatsAppButton';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-hero-mesh animate-pulse-soft" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-400/20 via-transparent to-transparent" aria-hidden />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 animate-slide-up">
          <Logo className="text-xl sm:text-2xl md:text-3xl" iconClassName="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>
        <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight animate-slide-up animation-delay-100" style={{ animationFillMode: 'backwards' }}>Vehículos usados seleccionados, con total confianza</h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto animate-slide-up animation-delay-200" style={{ animationFillMode: 'backwards' }}>Te acompañamos en todo el proceso para que compres seguro y sin vueltas</p>
        <div className="mt-6 sm:mt-8 flex justify-center animate-slide-up animation-delay-300" style={{ animationFillMode: 'backwards' }}>
          <WhatsAppButton className="!px-5 !py-3 sm:!px-6 !rounded-xl !shadow-lg !shadow-accent-500/20 !text-sm sm:!text-base touch-manipulation hover:!scale-105 hover:!shadow-xl hover:!shadow-accent-500/30 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
