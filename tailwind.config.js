/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    flowbite.content(),
    
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#FFCE14',
        'secondary': '#OD0842',
        'bg': '#ffffff'
      }
    },
  },
  plugins: [daisyui, flowbite.plugin(),],


  daisyui: {
    themes: ["#1F2937",],
  },
  
}

