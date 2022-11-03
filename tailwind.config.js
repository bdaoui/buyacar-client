/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'car': "url('../src/assets/p_pVF.png')",
      },
    colors: {
      gold : "#d4af37"
    },
    // screens: {
    //   'sm': '375px',
    //   // => @media (min-width: 640px) { ... } 
  
    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }
  
    //   'lg': '1280px',
    //   // => @media (min-width: 1024px) { ... }
  
    //   'xl': '1920px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    },
  },
  plugins: [],
}
