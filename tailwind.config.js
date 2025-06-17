/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primarycolor: '#F68920',
        secondarycolor: '#0B407A',
        outline_grey: '#D9D9D9',
        labelColor: '#E8E8E8'
      }
    },
  },
  plugins: [],
}

