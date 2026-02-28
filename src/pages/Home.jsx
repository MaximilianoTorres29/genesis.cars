import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyGenesis } from '../components/WhyGenesis';
import { VehiclesSection } from '../components/VehiclesSection';
import { HowToBuy } from '../components/HowToBuy';
import { ContactForm } from '../components/ContactForm';

/**
 * Página principal de la landing.
 * Incluye scroll reveal para elementos con clase .animate-on-scroll
 */
export function Home() {
  const { hash } = useLocation();

  // Scroll al ancla al cargar (ej. /#vehiculos)
  useEffect(() => {
    if (hash && hash.length > 1) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          try {
            if (entry.isIntersecting && entry.target.isConnected) {
              entry.target.classList.add('visible');
            }
          } catch (_) { /* ignorar errores en callback */ }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const nodes = document.querySelectorAll('.animate-on-scroll');
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <WhyGenesis />
      <VehiclesSection />
      <HowToBuy />
      <ContactForm />
    </main>
  );
}
