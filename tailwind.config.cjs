/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      sm: ['18px', {fontWeight: '300'}],
      'md-light': ['24px', {fontWeight: '300'}],
      md: ['24px', {fontWeight: '500'}],
      lg: ['32px', {fontWeight: '300'}],
      'body-m': ['15px', {fontWeight: '300'}],
      'body-s': ['13px', {fontWeight: '300'}],
    },
    colors: {
      'red': '#FC4747',
      'black': '#10141E',
      'light-grey': '#5A698F',
      'dark-grey': '#161D2F',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Outfit'],
      serif: ['sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
