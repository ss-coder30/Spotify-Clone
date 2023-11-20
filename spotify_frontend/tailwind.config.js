module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "spotify-green": "#1DB954",
        "app-bg": "#121212",
      },
      fontFamily:{
        "poppins": ["Poppins", "sans-serif"]
      },            
      height:{
        "1/10": "10%",
        "9/10": "90%"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
