/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
		screens: {
			'xs': { 'max' : '640px' }
		}
	},
  },
  plugins: [],
}

