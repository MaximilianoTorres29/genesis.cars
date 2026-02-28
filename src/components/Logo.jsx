/**
 * Icono de auto (silueta lateral) para el logo
 */
function CarIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
  );
}

/**
 * Logo Génesis Cars
 * Desktop: "Génesis Cars" en una línea, icono a la derecha en blanco
 * Mobile: dos líneas centradas ("Génesis" / "Cars"), icono a la derecha en blanco
 */
export function Logo({ className = '', variant = 'default' }) {
  const isCompact = variant === 'compact';

  return (
    <div className={`flex items-center justify-center md:justify-start gap-2 md:gap-3 ${className}`}>
      {/* Texto: dos líneas centradas en mobile, una línea en desktop */}
      <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-1.5 text-center md:text-left leading-tight">
        <span className="text-white font-bold tracking-tight">Génesis</span>
        <span className="text-accent-400 font-bold tracking-tight">Cars</span>
        {!isCompact && (
          <div className="w-12 h-0.5 bg-accent-500 mt-1 mx-auto md:hidden" aria-hidden="true" />
        )}
      </div>
      {/* Icono de auto a la derecha, siempre en blanco */}
      <CarIcon className="w-8 h-8 md:w-9 md:h-9 text-white flex-shrink-0" />
    </div>
  );
}
