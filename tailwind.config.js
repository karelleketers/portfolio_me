module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '480px',
      'md': '547px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
    },
    spacing: {
      '1': '0.5rem',
      '2': '1rem',
      '3': '1.25rem',
      '4': '1.5rem',
      '5': '2.25rem',
      '6': '3rem',
      '7': '4rem',
      'hero': '39.5rem',
    },
    textColor: {
      'dark': '#1E252E',
      'gold': '#B66C3B',
      'light': '#E4E4E4',
    },
    fontSize: {
      'smallest': '.5rem',
      'smaller': '.813rem',
      'small': '1.375rem',
      'base': '1.5rem',
      'xl': '4.9rem',
    },
    letterSpacing: {
      widest: '.3rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark': '#1E252E',
        'gold': '#B66C3B',
        'light': '#E4E4E4'
      },
      fontFamily: {
        serif: ['ivyreg', 'serif'],
        sans: ['josefin', 'sans-serif'],
        'josb': ['josefinbold', 'sans-serif'],
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
