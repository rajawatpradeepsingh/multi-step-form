/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'right': '2px 0 15px -3px rgba(0, 0, 0, 0.1), 2px 0 6px -4px rgba(0, 0, 0, 0.1)',
        'button':'0px 4px 12px 0px #cbbeff',
        'input':'2px 0px 15px rgba(0, 0, 0, 0.1)',
        'review':'0px 4px 12px 0px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'regal-blue': '#hsla(252, 54%, 58%, 1)',
      },
      height: {
        'screen-minus-header': 'calc(100vh - 60px)',
      },
    },
  },
  plugins: [],
}