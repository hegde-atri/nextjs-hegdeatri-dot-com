/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: "#1A1B26",
      dusk: "#565F89",
      carolina: "#7897DA",
      lavender: "#79459A",
      purple: "#BB9AF7",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      blue: colors.blue,
      purple: colors.purple,
      red: colors.red,
    },
  },
  plugins: [],
};
