import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import vehiclesData from '../data/vehicles.json';

const vehiclesList = Array.isArray(vehiclesData) ? vehiclesData : [];

/**
 * Página de detalle de un vehículo.
 * Muestra galería, descripción, características y CTA WhatsApp.
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
          <Link to="/" className="text-accent-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  const { marca, modelo, año, kilometraje, imagenes, descripcion, caracteristicas } = vehicle;
  const whatsAppMessage = `Hola, me interesa el ${marca} ${modelo} ${año}. ¿Podrían darme más información?`;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/#vehiculos"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-accent-600 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a vehículos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Galería */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <img
                src={imagenes[activeImage]}
                alt={`${marca} ${modelo} - imagen ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {imagenes.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {imagenes.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      activeImage === index ? 'border-accent-500' : 'border-gray-200 hover:border-accent-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
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

            {caracteristicas && (
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h2 className="text-lg font-semibold text-primary-900 mb-4">Características</h2>
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(caracteristicas).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-primary-600 capitalize">{key}:</span>
                      <span className="font-medium text-primary-900">{value}</span>
                    </li>
                  ))}
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
