const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/*.md',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'robotoSlab': ['Roboto Slab Bold', 'Georgia', 'serif'],
      'robotoMono': ['Roboto Mono', 'Courier', 'monospace'] 
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        warmGray: colors.warmGray,
        blueGray: colors.blueGray,
        lightBlue: colors.lightBlue,
        teal: colors.teal,
        gray: colors.gray,
        lime: colors.lime,
        redOrange: {
          50: "#FFF5F0",
          100: "#FFE8DC",
          200: "#FED1BA",
          300: "#FDB08D",
          400: "#FA8257",
          500: "#F45C2D",
          600: "#E33F19",
          700: "#BE2F14",
          800: "#9A2817",
          900: "#7E2518",	
        },
      }
    }
  },
  variants: {
    extend: {},
  },
}