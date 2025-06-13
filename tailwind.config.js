/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#0B407A',
        secondary: '#F68920',
        backgroundGrey: '#ECF1F4'
      },
    },
  },
  plugins: [],
}

