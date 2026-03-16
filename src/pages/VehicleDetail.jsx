import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import vehiclesData from '../data/vehicles.json';
import { getImageUrl } from '../utils/images';

const iconClass = 'w-5 h-5 text-accent-500 flex-shrink-0';

const specIcons = {
  Año: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  ),
  Kilometraje: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  ),
  Motor: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  Versión: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
  ),
  Transferencia: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  ),
  Precio: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
  ),
  'Financiamos con': (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  'Financia y retira con': (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  Financiación: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  Tracción: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 11-4 0 2 2 0 014 0zM16 17a2 2 0 11-4 0 2 2 0 014 0zM5.5 17H4v-4.5a2.5 2.5 0 012.5-2.5h9a2.5 2.5 0 012.5 2.5V17h-1.5M4 12.5h16" /></svg>
  ),
  Transmisión: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  Interior: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
  ),
  Techo: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
  ),
  Pantalla: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Sensores: (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
  ),
};

function getSpecIcon(label) {
  return specIcons[label] ?? (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  );
}

export function VehicleDetail() {
  const { id } = useParams();
  const vehicle = vehiclesData.find((v) => String(v.id) === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!vehicle) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-primary-600">Vehículo no encontrado.</p>
        <Link to="/#vehiculos" className="mt-4 inline-block text-accent-600 font-medium hover:text-accent-700">Volver al inicio</Link>
      </div>
    );
  }

  const msg = `Hola, me interesa el ${vehicle.marca} ${vehicle.modelo} ${vehicle.año}. ¿Podrían darme más información?`;
  const rawSpecs = vehicle.especificaciones || [
    { label: 'Kilometraje', value: `${vehicle.km} km` },
    { label: 'Año', value: vehicle.año },
    { label: 'Financiación', value: 'Consultanos para financiar' },
    { label: 'Transferencia', value: vehicle.descripcion }
  ];
  let specs = rawSpecs
    .filter((s) => s.label !== 'Precio')
    .map((s) => {
      if (s.label === 'Financiamos con') {
        return { label: 'Financiación', value: `Financia y retira con ${s.value}` };
      }
      if (s.label === 'Financia y retira con') return { label: 'Financiación', value: s.value };
      return s;
    });
  if (!specs.some((s) => s.label === 'Financiación')) {
    specs = [...specs, { label: 'Financiación', value: 'Consultanos para financiar' }];
  }

  const images = vehicle.imagenes && vehicle.imagenes.length > 0 ? vehicle.imagenes : (vehicle.imagen ? [vehicle.imagen] : []);
  const mainImage = images[selectedImageIndex] || vehicle.imagen;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barra superior oscura - como la referencia */}
      <div className="bg-primary-800 border-b border-primary-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <Link to="/#vehiculos" className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white text-small font-medium touch-manipulation">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a vehículos
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Columna izquierda: galería */}
          <div className="lg:flex-1 lg:min-w-0">
            <div className="rounded-xl overflow-hidden bg-white border border-primary-100 shadow-xl">
              <div className="relative aspect-[4/3] lg:aspect-[16/10] bg-primary-100 flex items-center justify-center overflow-hidden min-h-[220px]">
                {mainImage ? (
                  <img
                    key={selectedImageIndex}
                    src={getImageUrl(mainImage)}
                    alt={`${vehicle.marca} ${vehicle.modelo} - Imagen ${selectedImageIndex + 1}`}
                    decoding="async"
                    className="w-full h-full object-cover object-center animate-fade-in"
                  />
                ) : (
                  <span className="text-primary-400 text-small">Sin imagen</span>
                )}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((i) => (i === 0 ? images.length - 1 : i - 1))}
                      className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white hover:scale-110 shadow-md flex items-center justify-center text-primary-700 touch-manipulation transition-transform duration-200"
                      aria-label="Imagen anterior"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((i) => (i === images.length - 1 ? 0 : i + 1))}
                      className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white hover:scale-110 shadow-md flex items-center justify-center text-primary-700 touch-manipulation transition-transform duration-200"
                      aria-label="Siguiente imagen"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 p-3 border-t border-primary-100 overflow-x-auto">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedImageIndex(i)}
                      className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 touch-manipulation hover:scale-105 ${
                        i === selectedImageIndex ? 'border-accent-500 ring-2 ring-accent-200' : 'border-primary-200 hover:border-primary-300'
                      }`}
                    >
                      <img src={getImageUrl(src)} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Columna derecha: título + especificaciones + WhatsApp */}
          <div className="lg:w-[380px] xl:w-[420px] flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary-900 leading-tight">{vehicle.marca} {vehicle.modelo}</h1>
            <p className="mt-2 text-primary-600 text-small">Año: {vehicle.año} · Kilometraje: {vehicle.km} km</p>

            <div className="mt-5 sm:mt-6 rounded-xl border border-primary-100 bg-white shadow-xl overflow-hidden">
              <h2 className="px-4 py-3 bg-primary-50 border-b border-primary-100 text-card-title font-semibold text-primary-900">Especificaciones</h2>
              <ul className="divide-y divide-primary-100">
                {specs.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 px-4 py-3 text-small sm:text-body">
                    <span className="flex-shrink-0">{getSpecIcon(item.label)}</span>
                    <span className="text-primary-600 font-medium min-w-0 flex-1">{item.label}</span>
                    <span className="text-primary-900 text-right font-medium break-words">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <WhatsAppButton message={msg} className="!w-full !justify-center !px-6 !py-3.5 !rounded-xl !text-base !font-semibold hover:!scale-[1.02] active:!scale-[0.98] !transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
