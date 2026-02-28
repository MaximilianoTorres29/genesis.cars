import { VehicleCard } from './VehicleCard';
import vehiclesData from '../data/vehicles.json';

const vehicles = Array.isArray(vehiclesData) ? vehiclesData : [];

/**
 * Sección principal de vehículos en venta.
 * Galería de cards con enlace a detalle por id.
 */
export function VehiclesSection() {
  return (
    <section
      id="vehiculos"
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="vehicles-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="vehicles-title"
          className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4 animate-on-scroll"
        >
          Vehículos en venta
        </h2>
        <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12 animate-on-scroll">
          Unidades seleccionadas, revisadas y listas para transferir
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
