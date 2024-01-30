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
       
'90%':{
  transform: 'translate(0px)'
},

          '100%': {
            transform: 'translate(-1500px)'
          }
        },
        mobile: {
          '0%': {
            transform: 'translate(-900px)'
          },
          '80%': {
            transform: 'translate(0px)'
          },
          '100%':{
            transform: 'translate(-900px)'
          }
        },
      },
      animation: {
        loopthing: 'loopthing 10s ease-in-out infinite',
        mobile: 'mobile 10s ease-in-out infinite'
      }
    },
  },
  plugins: [
   
  ],
}