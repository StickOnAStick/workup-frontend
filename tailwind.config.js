/** 
 * @type {import('tailwindcss').Config} 
 * */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          750: '#2F2F2F'
        }
      },
      screens: {
        'xs': '370px',
      }
    },
  },
  plugins: [],
}
