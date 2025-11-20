/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {

      colors:{
        fone: "#F1F0EE",
        lightfone: "#FFFFFF",
        b_fone: "#9B1E1C",

      },

      fontFamily: {
          inter: ['Inter', 'sans-serif'],
          manrope: ['Manrope', 'sans-serif'],
        },



    },
    
  },
  plugins: [],
}

