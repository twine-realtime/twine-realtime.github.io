/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        main: ['Epilogue', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        arbiterBlue: '#0a2a7f',
        arbiterPink: '#f33798',
      },
    },
  },
  plugins: [],
};