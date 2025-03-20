module.exports = {
  content: [
    "./index.html",  // If you have a single index.html
    "./src/**/*.html" // If you have multiple HTML files inside a 'src' folder
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add custom font names here
        sans: ['Inter', 'sans-serif'],  // Adding Open Sans as the primary sans font
        roboto: ['Roboto', 'sans-serif'],  // Adding Roboto as a custom font
      },
    },
  },
  plugins: [],
};
