import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#161A1E',
        'charcoal-light': '#1F252B',
        brand: {
          DEFAULT: '#E2571F',
          dark: '#C24614',
        },
        gold: '#A5854E',
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
