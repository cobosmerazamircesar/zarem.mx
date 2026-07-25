/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#132a4d",
          dark: "#0b1b33",
        },
      },
      fontFamily: {
        title: ['"Lancelot"', "serif"],
        caption: ['"Sukar"', "sans-serif"],
        body: ['"Be Vietnam Pro"', "sans-serif"],
      },
      backgroundImage: {
        topographic: "url('../images/topographic-pattern.svg')",
      },
    },
  },
  plugins: [],
}
