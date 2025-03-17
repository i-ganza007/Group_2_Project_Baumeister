module.exports = {
  content: [
    "./index.html",  
    "./src/**/*.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      screens: {
        'iphone': {'max':'430px'}, 
      },
    },
  },
  plugins: [],
};
