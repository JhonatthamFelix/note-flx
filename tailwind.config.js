/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily:{
        Sans:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

