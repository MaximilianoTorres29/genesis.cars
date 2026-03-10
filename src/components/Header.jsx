import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#vehiculos', label: 'Vehículos' },
  { href: '/#por-que-nosotros', label: 'Cómo trabajamos' },
  { href: '/#contacto', label: 'Contacto' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-primary-900/95 backdrop-blur border-b border-primary-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <Logo className="text-lg sm:text-xl" />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-gray-300 hover:text-white text-small font-medium whitespace-nowrap transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:block after:w-full after:h-0.5 after:bg-accent-400 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left">{label}</a>
          ))}
        </nav>
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-primary-700/50 touch-manipulation"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary-900 border-b border-primary-700/50 shadow-xl">
          <nav className="flex flex-col p-4 gap-1 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={closeMenu} className="py-3 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-primary-700/50 text-base font-medium">
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
