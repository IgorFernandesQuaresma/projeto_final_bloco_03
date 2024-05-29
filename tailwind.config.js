/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'preto': '#0E0E0E',
      'cinza': '#181716',
      'verde': '#36AB9C',
      'branco': '#FFFFFF',
      'azul': '#3871C1',
      'transparent': 'transparent',
    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
