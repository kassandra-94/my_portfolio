const colors = require('tailwindcss/colors')

module.exports = {
  extends: [],
  purge:  [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      green:{
        light: "#d7fdce",
        default: "#5ef939",
        dark: "#166603",
      },
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      lime: colors.lime,
      teal: colors.teal,
      pink: colors.pink,
    },
    extend: {
      backgroundImage: {
        'hero-pattern':"url('/images/hero-pattern.svg')",
       },
       fontFamily :{
        od :['Rosario'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
