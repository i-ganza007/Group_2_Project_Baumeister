module.exports = {
  content: [
    './index.html',  
    './src/**/*.html', 
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        gray: '#EFECEA',
        "imprint-green": '#00672E',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      screens: {
        iphone: {'max': '430px'},
        ipad: '831px',
        galaxy: '800px',
      },
    },
  },
  plugins: [],
};
