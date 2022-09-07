const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.jsx'],
	theme: {
		extend: {
			fontFamily: { sans: ['Iosevka Web', ...defaultTheme.fontFamily.sans] },
		},
	},
	plugins: [],
}
