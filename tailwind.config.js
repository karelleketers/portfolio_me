module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '360px',
      'sm': '420px',
      'int': '480px',
      'md': '547px',
      'lg': '768px',
      'xl': '1024px',
      'xli': '1366px',
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
      '8': '4.5rem;',
      '20': '20.5rem',
      '75': '75rem',
      '103': '6.4375rem',
      '123': '7.6875rem',
      'nav': '8.625rem',
      'hero': '39.5rem',
      'blob_1_w': '107rem',
      'blob_1_h': '45.8rem',
      'blob_2_h': '24rem',
      'bcard_h': '30rem',
      'bcardlg': '40rem',
      'bcardxl': '50rem',
      'bcard2xl': '60rem',
      'intfull': '41.8rem',
      '12/25': '48%',
    },
    textColor: {
      'dark': '#1E252E',
      'gold': '#B66C3B',
      'light': '#E4E4E4',
    },
    inset: {
      '0': '0',
      '1': '1rem',
      '6': '3rem',
      '8': '-4rem',
      '1/5': '20%',
      '11': '-11rem',
      '13': '-13rem',
      '1/3': '30%',
      '35': '35%',
      '2/5': '40%',
      '1/2': '50%',
    },
    fontSize: {
      'smallest': '.5rem',
      'elev_med': ['0.75rem', {
        lineHeight: '1.5rem'
      }],
      'smaller': ['.813rem', {
        lineHeight: '0.813rem'
      }],
      'small': ['1.375rem', {
        lineHeight: '1.719rem'
      }],
      'med': ['1rem', {
        lineHeight: '1rem'
      }],
      'par': ['1.25rem', {
        lineHeight: '1.375rem'
      }],
      'base': ['1.5rem', {
        lineHeight: '3rem'
      }],
      'xl': ['4.5rem', {
        lineHeight: '5.25rem'
      }],
      'blobmed': ['2rem', {
        lineHeight: '2.375rem'
      }],
      'blobplus': ['2.25rem', {
        lineHeight: '2.7rem'
      }],
      'titlesmall': ['2.875rem', {
        lineHeight: '3.063rem'
      }],
      'titlemed': ['6.375rem', {
        lineHeight: '6.375rem'
      }],
      'textmed': ['1.75rem', {
        lineHeight: '3.125rem'
      }],
      'intermezzolg': '2rem',
      'intermezzosm': ['0.875rem', {
        lineHeight: '1.125rem'
      }],
      'intermezzo360lg': '2.375rem',
      'intermezzo360sm': ['1.125rem', {
        lineHeight: '1.25rem'
      }],
      'intermezzo420lg': '2.7rem',
      'intermezzo420sm': ['1.25rem', {
        lineHeight: '1.375rem'
      }],
      'intermezzo547lg': '3.5rem',
      'intermezzo547sm': ['1.5rem', {
        lineHeight: '1.375rem'
      }],
      'intermezzo768lg': '4rem',
      'intermezzo768sm': ['1.75rem', {
        lineHeight: '1.75rem'
      }],

    },
    letterSpacing: {
      widest: '.3rem',
    },
    extend: {
      fill: {
        'light': '#E4E4E4'
      },
      zIndex: {
      '-10': '-10',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'dark': '#1E252E',
        'gold': '#B66C3B',
        'light': '#E4E4E4',
      },
      fontFamily: {
        'reg': ['prep', 'serif'],
        'thin': ['prepthin', 'serif'],
        'light': ['preplight', 'serif'],
        'bold': ['prepbold', 'serif'],
        sans: ['josefin', 'sans-serif'],
        'josb': ['josefinbold', 'sans-serif'],
        'josefine': ['josefine', 'sans-serif'],
        'josethin': ['josethin'],
        'mendlight': ['mendlight'],
        'mendbol': ['mendlight'],
    },
    width: {
      'card': '6.125rem',
      'logo': '4.5rem',
      '69': '68.75rem',
      '95': '95rem',
      '110': '110rem',
      '120': '120rem',
      '130': '130rem',
    },
    maxWidth: {
      'button': '10.8rem',
      'button-cont': '32rem',
      'socials': '37.5rem',
      'card': '6.125rem'
    },
    gridTemplateRows: {
      '8': 'repeat(8, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))'
    },
  }},
  variants: {
    fill: ['hover'],
    extend: {},
  },
  plugins: [],
}
