import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';
import { CONTACT_EMAIL } from '../constants';

export function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-800 text-white border-t border-accent-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
          <div>
            <Link to="/"><Logo className="text-xl sm:text-2xl font-bold tracking-tight" /></Link>
            <p className="mt-2 text-gray-400 text-small">Venta de vehículos usados seleccionados</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <WhatsAppButton className="!px-5 !py-3 sm:!px-6 !rounded-xl !text-sm sm:!text-base hover:!scale-105 active:!scale-95 !transition-transform" />
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white text-small break-all transition-colors duration-200">{CONTACT_EMAIL}</a>
          </div>
        </div>
        <p className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-primary-700/50 text-center text-gray-500 text-small">&copy; {y} L&M Automotores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
