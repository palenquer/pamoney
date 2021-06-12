module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      width: {
        '20px': '20px',
      },
      height: {
        '20px': '20px',
      }
    },
  },
  variants: {
    extend: {
     brightness: ['hover', 'focus'],
    }
  },
  plugins: [],
};
