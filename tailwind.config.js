/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
     fontFamily:{
    'neue': ['"Bebas Neue"', 'cursive']
          },
          screen:{
          'mobile':'360px'
          },

    extend: {  },
  },
  plugins: [],
}

