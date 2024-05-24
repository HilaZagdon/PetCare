module.exports = {
  purge: ['./app/**/*.jsx', './app/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        Poetsen: ["Poetsen One", 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        slideIn: 'slideIn 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};