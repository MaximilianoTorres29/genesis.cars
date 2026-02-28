import { Link } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';

/**
 * Card de vehículo para la galería.
 * Diseño premium: imagen con badge, tipografía clara y CTA destacado.
 */
export function VehicleCard({ vehicle }) {
  const { id, imagen, marca, modelo, año, kilometraje, precio } = vehicle;
  const detailMessage = `Hola, me interesa el ${marca} ${modelo} ${año}. ¿Podrían darme más información?`;

  return (
    <article className="group animate-on-scroll">
      <div className="h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-accent-200/50 transition-all duration-300 hover:-translate-y-1">
        <Link to={`/vehiculo/${id}`} className="block">
          {/* Imagen con overlay y badge de año */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={imagen}
              alt={`${marca} ${modelo} ${año}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-sm text-primary-900 text-xs font-semibold shadow-sm">
              {año}
            </span>
          </div>

          {/* Contenido */}
          <div className="p-5 pb-4">
            <h3 className="text-lg font-bold text-primary-900 group-hover:text-accent-600 transition-colors line-clamp-1">
              {marca} {modelo}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-primary-600">
              <li className="flex items-center gap-1.5">
                <span className="text-accent-500 group-hover:text-green-600 transition-colors duration-200" aria-hidden="true">●</span>
                {año}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-accent-500 group-hover:text-green-600 transition-colors duration-200" aria-hidden="true">●</span>
                {kilometraje}
              </li>
              {precio && (
                <li className="flex items-center gap-1.5">
                  <span className="text-accent-500 group-hover:text-green-600 transition-colors duration-200" aria-hidden="true">●</span>
                  {precio}
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
