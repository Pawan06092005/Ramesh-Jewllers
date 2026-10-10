/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5EF', // Warm ivory — primary canvas
        beige: '#E8DFD1', // Soft beige — secondary surfaces
        charcoal: {
          DEFAULT: '#191817', // Deep charcoal — text & dark sections
          soft: '#262422', // Raised surfaces on dark
        },
        gold: {
          DEFAULT: '#C6A56B', // Champagne gold — accents, rules, icons
          soft: '#DCC59A', // Hover tint on dark surfaces
          deep: '#74572D', // Accessible gold for small text on ivory & beige (AA)
        },
        stone: '#66615A', // Secondary text on light surfaces
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        1200: '1200ms',
        1600: '1600ms',
      },
      keyframes: {
        'scroll-line': {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '45%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '55%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        'scroll-line': 'scroll-line 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
    },
  },
  plugins: [],
}
