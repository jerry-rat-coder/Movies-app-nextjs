/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js,jsx,tsx}",
    "./app/**/*.{html,js,jsx,tsx}",
    "./pages/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['peer-placeholder-shown', 'peer-focus'],
      translate: ['peer-placeholder-shown', 'peer-focus']
    },
  },
}