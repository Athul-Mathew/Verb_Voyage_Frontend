/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  ttheme: {
    extend: {
      colors: {
        main: '#080A1A',
        subMain: '#F20000',
        dry: '#0B0F29',
        star: '#ecb613',
        boarder: '#4b5563',
        dryGray: '#E0D5D5'
      },
      height: {
        header: '560px',
        rate: '400px'
      },
      fontSize: {
        h1: '2.6rem'
      },
      screens: {
        xs: '475px'
      }
    },
  },
  plugins: [],
}

