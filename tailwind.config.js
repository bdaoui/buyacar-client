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
    },
  },
  plugins: [],
}
