export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#55527c',
        dark: '#130f49',
        yellow: '#ff972d',
        blue: '#a5a6ff',
      },
      fontFamily: {
        kristi: ['Kristi', 'cursive'],
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
