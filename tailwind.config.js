module.exports = {
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '*.html', // If you have multiple HTML files in the root folder
  ],
  theme: {
    extend: {
      colors: {
        gray: '#EFECEA',
        'imprint-green': '#00672E',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        primary: '#00672E',
      },
      screens: {
        iphone: { max: '430px' },
        ipad: '831px',
        galaxy: '800px',
      },
    },
  },
  plugins: [],
};
