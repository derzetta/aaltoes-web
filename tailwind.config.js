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
        geist: ['Geist', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      animation: {
        'loading-bar': 'loading-bar 1.5s ease-in-out infinite',
        'scroll-left': 'scroll-left 40s linear infinite',
        'scroll-right': 'scroll-right 40s linear infinite',
        'twinkle': 'twinkle 10s ease-in-out infinite',
        'flag-wave': 'flag-wave 8s ease-in-out infinite',
        'flag-segment': 'flag-segment 3s ease-in-out infinite',
      },
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'twinkle': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.8 },
          '100%': { opacity: 0 }
        },
        'flag-wave': {
          '0%': { 
            transform: 'perspective(1000px) rotateX(13deg) rotateY(0deg)'
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(13deg) rotateY(10deg)'
          },
          '100%': {
            transform: 'perspective(1000px) rotateX(13deg) rotateY(0deg)'
          }
        },
        'flag-segment': {
          '0%': { 
            transform: 'perspective(1000px) rotateY(0deg) translateZ(0px)'
          },
          '50%': {
            transform: 'perspective(1000px) rotateY(15deg) translateZ(20px)'
          },
          '100%': {
            transform: 'perspective(1000px) rotateY(0deg) translateZ(0px)'
          }
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

