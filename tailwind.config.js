/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      bulldozer: 'url("./src/img/bulldozer.jpg")',
    },
  },
  plugins: [],
};
