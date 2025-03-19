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
        'ipad':'831px',
        'galaxy':'800px'
      },
      colors: {
        'imprint-green':'#00672E'
      }
    },
  },
  plugins: [],
};
