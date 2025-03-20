module.exports = {
  content: [
    './index.html', // If you have a single index.html
    './src/**/*.html', // If you have multiple HTML files inside a 'src' folder
  ],
  theme: {
    extend: {
      colors: {
        gray: '#EFECEA',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      // fontFamily: {
      //   body: ['Nunito']
      // }
    },
  },
  plugins: [],
};
