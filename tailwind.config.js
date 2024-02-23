/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mdd': '900px',
      },
      colors: {
        'nav': 'rgb(248,255,193)',
      }
    }
  },
  plugins: [],
}

