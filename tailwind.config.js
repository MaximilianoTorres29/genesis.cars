/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'section-title': ['1.875rem', { lineHeight: '2.25rem' }],
        'section-subtitle': ['1rem', { lineHeight: '1.5rem' }],
        'card-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'body': ['1rem', { lineHeight: '1.5rem' }],
        'small': ['0.875rem', { lineHeight: '1.25rem' }],
      },
      colors: {
        primary: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8',
          500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a'
        },
        accent: {
          300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309'
        },
        warm: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a' }
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(ellipse at top, rgba(251,191,36,0.12) 0%, transparent 50%)'
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-up': { '0%': { opacity: '0', transform: 'translateY(12px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'slide-up-lg': { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'scale-in': { '0%': { opacity: '0', transform: 'scale(0.96)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        'scale-in-orange': {
          '0%': { opacity: '0', transform: 'scale(0.96)', boxShadow: '0 0 0 0 rgba(245, 158, 11, 0)' },
          '40%': { boxShadow: '0 0 24px 4px rgba(245, 158, 11, 0.35)' },
          '100%': { opacity: '1', transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(245, 158, 11, 0)' }
        },
        'float': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        'shimmer': { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        'pulse-soft': { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.85' } },
        'line-in': { '0%': { transform: 'scaleX(0)', opacity: '0' }, '100%': { transform: 'scaleX(1)', opacity: '1' } },
        'title-glow': { '0%, 100%': { textShadow: '0 0 20px rgba(251,191,36,0)' }, '50%': { textShadow: '0 0 24px rgba(251,191,36,0.25)' } }
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-up-lg': 'slide-up-lg 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'scale-in-orange': 'scale-in-orange 0.4s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'line-in': 'line-in 0.6s ease-out 0.3s backwards',
        'title-glow': 'title-glow 3s ease-in-out infinite'
      },
      transitionDuration: {
        '400': '400ms'
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms'
      }
    }
  },
  plugins: []
};
