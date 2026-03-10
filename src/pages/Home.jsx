import { Hero } from '../components/Hero';
import { WhyGenesis } from '../components/WhyGenesis';
import { HowToBuy } from '../components/HowToBuy';
import { ContactForm } from '../components/ContactForm';
import { VehicleCard } from '../components/VehicleCard';
import vehiclesData from '../data/vehicles.json';

export function Home() {
  return (
    <>
      <Hero />
      <WhyGenesis />
      <section id="vehiculos" className="py-10 sm:py-12 md:py-20 bg-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="animate-slide-up-lg" style={{ animationFillMode: 'backwards' }}>
              <h2 className="text-xl sm:text-section-title font-bold text-primary-900 text-center animate-title-glow">Vehículos en venta</h2>
              <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 origin-center animate-line-in" />
            </div>
            <p className="text-section-subtitle text-primary-600 text-center mt-4 mb-2 px-2 animate-slide-up" style={{ animationFillMode: 'backwards', animationDelay: '200ms' }}>Unidades seleccionadas, revisadas y listas para transferir</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {vehiclesData.map((v, i) => <VehicleCard key={v.id} vehicle={v} index={i} />)}
          </div>
        </div>
      </section>
      <HowToBuy />
      <ContactForm />
    </>
  );
}
