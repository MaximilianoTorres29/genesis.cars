import { memo } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';
import { getImageUrl } from '../utils/images';

const CalendarIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const GaugeIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const PriceIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const VehicleCard = memo(function VehicleCard({ vehicle, index = 0 }) {
  const { id, marca, modelo, año, precio, km, imagen } = vehicle;
  const msg = `Hola, me interesa el ${marca} ${modelo} ${año}. ¿Podrían darme más información?`;

  return (
    <article
      className="group relative rounded-xl bg-white border border-primary-100 overflow-hidden shadow-xl hover:border-accent-300/90 hover:shadow-[0_12px_40px_rgba(15,23,42,0.18),0_0_0_1px_rgba(251,191,36,0.25),0_0_20px_rgba(245,158,11,0.14)] hover:-translate-y-1 transition-all duration-300 ease-out animate-scale-in-orange"
      style={{ animationDelay: `${Math.min(index, 6) * 50}ms`, animationFillMode: 'backwards' }}
    >
      <Link to={`/vehiculo/${id}`} className="block">
        {/* Imagen a fondo completo, sin recuadro */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {imagen ? (
            <img
              src={getImageUrl(imagen)}
              alt={`${marca} ${modelo}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-400 text-xs">Sin imagen</div>
          )}
          <span className="absolute top-2 right-2 px-2 py-1 rounded-lg bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
            {año}
          </span>
        </div>

        {/* Contenido */}
        <div className="p-3 sm:p-4">
          <h3 className="text-sm font-bold text-primary-900 group-hover:text-accent-600 transition-colors leading-tight line-clamp-2">
            {marca} {modelo}
          </h3>
          <ul className="mt-2 space-y-1.5 text-xs text-primary-600">
            <li className="flex items-center gap-2">
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-accent-500 bg-accent-50 group-hover:bg-accent-500 group-hover:text-white transition-all duration-200">
                <CalendarIcon className="w-3.5 h-3.5" />
              </span>
              <span>{año}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-accent-500 bg-accent-50 group-hover:bg-accent-500 group-hover:text-white transition-all duration-200">
                <GaugeIcon className="w-3.5 h-3.5" />
              </span>
              <span>{km} km</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-accent-500 bg-accent-50 group-hover:bg-accent-500 group-hover:text-white transition-all duration-200">
                <PriceIcon className="w-3.5 h-3.5" />
              </span>
              <span>{precio} + transferencia</span>
            </li>
          </ul>
        </div>
      </Link>
      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
        <WhatsAppButton
          message={msg}
          className="!w-full !py-1.5 !rounded-xl !text-xs !font-medium !border !border-primary-200 !bg-white !text-primary-600 hover:!border-[#25D366] hover:!bg-[#25D366] hover:!text-white active:!scale-[0.98] transition-all duration-200 touch-manipulation"
        />
      </div>
    </article>
  );
});
