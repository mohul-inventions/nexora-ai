/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070913',
        surface: {
          dark: '#0c1024',
          card: 'rgba(15, 23, 42, 0.65)',
          border: 'rgba(56, 189, 248, 0.15)',
        },
        brand: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          blue: '#3b82f6',
          indigo: '#6366f1',
          emerald: '#10b981',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.6))' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(14, 165, 233, 0.15) 0%, rgba(139, 92, 246, 0.12) 35%, rgba(7, 9, 19, 0.95) 75%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}
