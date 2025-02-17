module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'biru' : '#1E234C',
        'krem' : '#FBE5D2',
        'merah' : '#E62434',
        'kuning' : '#F8BF0D',
      },
      fontFamily: {
        nuku: ['Nuku Nuku', 'sans-serif'],
        sansPro: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        'oneten': ['104px', {
          lineHeight: '104px',
        }],
        'threetwo': ['32px', {
          lineHeight: '32px',
        }],
        'forty': ['40px', {
          lineHeight: '40px',
        }],
        'fiftysix': ['56px', {
          lineHeight: '56px',
        }],
        'sixtyeit': ['68px', {
          lineHeight: '68px',
        }],
      },
      width: {
        '45c': '45%',
      },
      boxShadow: {
        'csel1': '20px 20px 16px -5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
