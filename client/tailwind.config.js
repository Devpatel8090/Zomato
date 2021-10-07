module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zomato: {
        50: '#ffe5e7',
        100: '#fabac0',
        200: '#f18f96',
        300: '#e9626d',
        400: '#e23744',
        500: '#c81d2a',
        600: '#9d1520',
        700: '#700d16',
        800: '#46060c',
        900: '#1e0002',
        },
        Foodtab:
        {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}