/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
],
  theme: {
    extend: {
      keyframes: {
        loopthing: {
          '0%': {
            transform: 'translate(-1500px)'
          },
       
'80%':{
  transform: 'translate(0px)'
},

          '100%': {
            transform: 'translate(-1500px)'
          }
        }
      },
      animation: {
        loopthing: 'loopthing 10s ease-in-out infinite',
      }
    },
  },
  plugins: [
   
  ],
}