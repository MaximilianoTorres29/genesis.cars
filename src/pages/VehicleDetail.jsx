import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { SpecIcon } from '../components/SpecIcon';
import { PRICE_TRANSFER_NOTE } from '../constants';
import vehiclesData from '../data/vehicles.json';

const vehiclesList = Array.isArray(vehiclesData) ? vehiclesData : [];

/** Mapeo de keys de caracteristicas a iconos (para vehículos sin especificaciones) */
const keyToIcon = {
  año: 'calendar',
  combustible: 'fuel',
  transmision: 'gear',
  puertas: 'default',
  color: 'default',
  kilometraje: 'gauge',
};

/**
 * Página de detalle de un vehículo.
 * Galería con recorte profesional, descripción y especificaciones con iconos.
 */
export function VehicleDetail() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const found = vehiclesList.find((v) => v.id === id);
    setVehicle(found);
    setActiveImage(0);
  }, [id]);

  if (!vehicle) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-primary-900 mb-4">Vehículo no encontrado</h1>
          <Link to="/#vehiculos" className="text-accent-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  const { marca, modelo, año, kilometraje, imagenes, descripcion, caracteristicas, especificaciones, imagePosition } = vehicle;
  const whatsAppMessage = `Hola, me interesa el ${marca} ${modelo} ${año}. ¿Podrían darme más información?`;

  const items = especificaciones || (caracteristicas && Object.entries(caracteristicas).map(([key, value]) => ({
    icon: keyToIcon[key] || 'default',
    label: key.charAt(0).toUpperCase() + key.slice(1),
    value,
  })));

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-primary-50/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/#vehiculos"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-accent-600 mb-8 transition-colors duration-200 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a vehículos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Galería con recorte centrado en el vehículo */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 vehicle-gallery-main flex items-center justify-center">
              <img
                src={imagenes[activeImage]}
                alt={`${marca} ${modelo} - imagen ${activeImage + 1}`}
                className="w-full h-full object-cover vehicle-image-crop"
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
              />
              {imagenes.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1))
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 text-primary-800 shadow-md hover:bg-white/90 hover:shadow-lg flex items-center justify-center transition"
                    aria-label="Imagen anterior"
                  >
                    <span className="sr-only">Anterior</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev === imagenes.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/70 text-primary-800 shadow-md hover:bg-white/90 hover:shadow-lg flex items-center justify-center transition"
                    aria-label="Imagen siguiente"
                  >
                    <span className="sr-only">Siguiente</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            {imagenes.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {imagenes.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      activeImage === index
                        ? 'border-primary-600 ring-2 ring-primary-200'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover vehicle-image-crop"
                      style={imagePosition ? { objectPosition: imagePosition } : undefined}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
              {marca} {modelo}
            </h1>
            <ul className="flex flex-wrap gap-4 text-primary-600 mb-6">
              <li><strong>Año:</strong> {año}</li>
              <li><strong>Kilometraje:</strong> {kilometraje}</li>
            </ul>

            <p className="text-primary-700 leading-relaxed mb-8">
              {descripcion}
            </p>

            {items && items.length > 0 && (
              <div className="mb-8 p-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-primary-900/5">
                <h2 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">Especificaciones</h2>
                <ul className="space-y-3">
                  {items.map((item, idx) => {
                  const isPrecioFinal = item.label === 'Precio' && item.value?.includes('$');
                  const value = isPrecioFinal ? `${item.value} (${PRICE_TRANSFER_NOTE})` : item.value;
                  return (
                    <li key={idx} className="flex items-center gap-3 text-sm group">
                      <SpecIcon name={item.icon} className="w-5 h-5 text-primary-500 group-hover:text-orange-500 transition-colors" />
                      <span className="text-primary-600 min-w-[7rem]">{item.label}</span>
                      <span className="font-medium text-primary-900">{value}</span>
                    </li>
                  );
                })}
                </ul>
              </div>
            )}

            <WhatsAppButton
              message={whatsAppMessage}
              className="w-full justify-center !py-4 text-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
