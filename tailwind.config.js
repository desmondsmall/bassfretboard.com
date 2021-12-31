const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cassie: {
          DEFAULT: '#2EC4B6',
          '50': '#BBEFEA',
          '100': '#AAEBE5',
          '200': '#89E3DB',
          '300': '#68DCD1',
          '400': '#47D4C7',
          '500': '#2EC4B6',
          '600': '#23978C',
          '700': '#196962',
          '800': '#0E3C37',
          '900': '#030E0D'
        },
      },
      screens: {

        'xs': '300px',

        'sm': '375px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
