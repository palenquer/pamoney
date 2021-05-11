module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {},
  },
  variants: {
    extend: {
     brightness: ['hover', 'focus'],
    }
  },
  plugins: [],
};
