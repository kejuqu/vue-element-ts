/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      screen: {
        mobile: '@media (max-width:768px){}'
      }
    }
  },
  plugins: []
}
