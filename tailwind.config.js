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
      screens: {
        'mobile-s': {'max': '320px'},
        'mobile-m': {'min': '321px', 'max': '376px'},
        'mobile-l': {'min': '376px', 'max': '426px'},
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
content: [
  "./node_modules/flowbite/**/*.js"
]
};
