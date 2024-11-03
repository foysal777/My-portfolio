/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'], 
  theme: {
    fontFamily: {
      'display': ['Oswald', 'Nunito Sans'],
      'pacifico': ['"Pacifico", cursive'],
      'Dosis': ["Dosis"],
      'jetbrain': ['JetBrains Mono", monospace'],
      'lobs': ["Lobster Two"],
      
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
