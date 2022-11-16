/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // content: ["./src/**/*.{html,js}"],
  content: ['./pages/**/*.{html,js}'],

  theme: {
    extend: {
      fontFamily: {
        primary: "'Roboto', sans-serif",
        secondary: "'Roboto Slab', sans-serif",
      },

      colors: {
        dark: "#404040",
        "dark-grey": "#262626",
        light: "#DCE3EB",
        primary: "#0077FF",
        "primary-dark": "#005EC9",
        "dark-overlay": "#489EFF ",
        brand: {
          'gray': '#F2F2F2',
          'gray-dark': '#404040',
          'black': '#262626',
          'blue': '#0077FF',
        }
      },
    },
  },
  plugins: [],
}
