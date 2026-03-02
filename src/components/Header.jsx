import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/#vehiculos', label: 'Vehículos' },
  { to: '/#como-trabajamos', label: 'Cómo trabajamos' },
  { to: '/#contacto', label: 'Contacto' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-primary-900/95 backdrop-blur-md border-b border-primary-800/80 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo variant="compact" className="text-xl group-hover:opacity-90 transition-opacity duration-300" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 py-1 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-accent-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton className="ml-2 !rounded-xl" />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <WhatsAppButton className="!px-3 !py-2 text-sm" />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-primary-800 transition-colors"
              aria-expanded={menuOpen}
              aria-label="Abrir menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            className="md:hidden py-4 border-t border-primary-800 animate-fade-in"
            role="navigation"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 px-3 rounded-lg text-gray-300 hover:text-white hover:bg-accent-500/20 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
