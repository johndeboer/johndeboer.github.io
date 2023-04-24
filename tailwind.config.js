/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'notosans': ['"Noto Sans JP"', 'sans-serif']        
      }
    },
  },
  plugins: [],
}

