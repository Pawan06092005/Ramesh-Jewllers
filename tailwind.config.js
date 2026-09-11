/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#690c1c', // Deep burgundy/red from logo background
          secondary: '#4a0813', // Darker shade for hovers
          accent: '#d4af37', // Metallic gold for text/accents
          accentLight: '#f3e5ab', // Light gold
          accentDark: '#996515', // Dark gold
          light: '#fdfbf7', // Warm off-white
          dark: '#1a0307', // Very dark red/black
          muted: '#8e6b72', // Muted red-grey for secondary text
          surface: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Elegant serif for headings
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
