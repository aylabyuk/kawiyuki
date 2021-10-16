/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.fuchsia,

      ...colors
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['disabled'],
      translate: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
