/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins'],
        'Shadows Into Light' : ['Shadows Into Light'],
        'Comic Neue' : ['Comic Neue'],
        'Anta' : ['Anta']
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'selector',
}

