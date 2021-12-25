module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#333',
        secondary: '#666',
      },
    },
    screens: {
      mobile: '0px',
      tablet: '481px',
      pc: '922px',
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
