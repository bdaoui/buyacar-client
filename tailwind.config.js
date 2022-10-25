/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'car': "url('../src/assets/bg_car.jpg')",
      },
    },
  },
  plugins: [],
}
