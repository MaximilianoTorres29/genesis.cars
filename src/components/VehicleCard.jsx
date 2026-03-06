import { Link } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';
import { SpecIcon } from './SpecIcon';
import { PRICE_TRANSFER_NOTE } from '../constants';

/**
 * Card de vehículo para la galería.
 * Iconos, sombras en capas y hover marcado.
 */
export function VehicleCard({ vehicle }) {
  const { id, imagen, marca, modelo, año, kilometraje, precio, imagePosition } = vehicle;
  const detailMessage = `Hola, me interesa el ${marca} ${modelo} ${año}. ¿Podrían darme más información?`;

  return (
    <article className="group animate-on-scroll">
      <div className="h-full rounded-2xl overflow-hidden bg-white border border-primary-100 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06),0_10px_20px_-5px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.18),0_0_0_1px_rgba(251,191,36,0.15),0_25px_50px_-12px_rgba(245,158,11,0.2)] hover:border-accent-300/50 transition-all duration-300 hover:-translate-y-1.5">
        <Link to={`/vehiculo/${id}`} className="block">
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={imagen}
              alt={`${marca} ${modelo} ${año}`}
              className="w-full h-full object-cover vehicle-card-image group-hover:scale-105 transition-transform duration-700 ease-out"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-primary-900 text-xs font-semibold shadow-lg border border-primary-100 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400 transition-colors">
              <SpecIcon name="calendar" className="w-3.5 h-3.5 text-accent-500 group-hover:text-white transition-colors" />
              {año}
            </span>
          </div>

          <div className="p-5 pb-4">
            <h3 className="text-lg font-bold text-primary-900 group-hover:text-accent-600 transition-colors duration-200 line-clamp-1">
              {marca} {modelo}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-600">
              <li className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-50 text-accent-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <SpecIcon name="calendar" className="w-4 h-4 shrink-0" />
                </span>
                <span>{año}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-50 text-accent-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <SpecIcon name="gauge" className="w-4 h-4 shrink-0" />
                </span>
                <span>{kilometraje}</span>
              </li>
              {precio && (
                <li className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-50 text-accent-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <SpecIcon name="price" className="w-4 h-4 shrink-0" />
                  </span>
                  <span>{precio.includes('$') ? `${precio} (${PRICE_TRANSFER_NOTE})` : precio}</span>
                </li>
              )}
            </ul>
          </div>
        </Link>

        {/* Botón WhatsApp con diseño destacado */}
        <div className="px-5 pb-5">
          <WhatsAppButton
            message={detailMessage}
            variant="card"
            className="w-full"
          />
        </div>
      </div>
    </article>
  );
}
