/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF6F0',
        'soft-ivory': '#F7F2EC',
        'champagne-beige': '#E9DDD1',
        terracotta: {
          50: '#FAF5F2',
          100: '#F5EBE6',
          200: '#E6D3C9',
          300: '#CCAFA1',
          400: '#B38C7A',
          500: '#986B58', // Primary Terracotta
          600: '#835948',
          700: '#795345', // Dusty Brown
          800: '#5C3E33',
          900: '#442E25', // Rich Chocolate Espresso
        },
        'dusty-brown': '#795345',
        'chocolate-brown': '#442E25',
        champagne: {
          50: '#FAF8F5',
          100: '#F3EFE9',
          200: '#E8DFD5',
          300: '#DAC9B8',
          400: '#C5A58F', // Muted Champagne Gold
          500: '#B58F76',
          600: '#9B745D',
        },
        gold: {
          light: '#F3E6C8',
          DEFAULT: '#C5A059',
          dark: '#9E7837',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', '"MonteCarlo"', 'cursive'],
        kannada: ['"Noto Serif Kannada"', '"Anek Kannada"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'stationery': '0 20px 45px -15px rgba(68, 46, 37, 0.12), 0 0 0 1px rgba(197, 165, 143, 0.25)',
        'stationery-lg': '0 30px 60px -15px rgba(68, 46, 37, 0.18), 0 0 0 1px rgba(197, 165, 143, 0.35)',
        'wax-seal': 'inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(68, 46, 37, 0.35)',
      },
    },
  },
  plugins: [],
}
