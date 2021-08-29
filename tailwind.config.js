module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        yellow:{
          450: '#E8955B'
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}