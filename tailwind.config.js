/** 
 * @type {import('tailwindcss').Config} 
 * */
module.exports = {
  darkMode: 'class',
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
      },
      gridTemplateColumns: {
        'scroll-sidebars': '1fr 4fr 1fr'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
}
