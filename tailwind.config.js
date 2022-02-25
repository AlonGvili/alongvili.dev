let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{ts,tsx,jsx,js}"],
	theme: {
		colors: {
			...colors,
			surface: "#090c16",
		},
		extend: {}
	},
	plugins: []
};
