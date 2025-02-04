/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Geist Mono"', 'monospace'],
        sans: ['Geist', 'sans-serif'],
      },
      animation: {
        'loading-bar': 'loading-bar 1.5s ease-in-out infinite',
      },
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      textShadow: {
        'default': '1px 1px 0 rgba(0,0,0,0.2), -1px -1px 0 rgba(0,0,0,0.2), 1px -1px 0 rgba(0,0,0,0.2), -1px 1px 0 rgba(0,0,0,0.2), 2px 2px 4px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)',
        'grid-zinc': 'linear-gradient(to right, rgb(244 244 245 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(244 244 245 / 0.1) 1px, transparent 1px)',
        'grid-zinc-100': 'linear-gradient(rgba(244,244,245,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,245,0.08) 1px, transparent 1px)',
        'grid': 'linear-gradient(rgba(244,244,245,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,245,0.08) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid': '24px 24px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

