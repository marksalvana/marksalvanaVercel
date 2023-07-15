/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js,ts}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			violet: "#C54B8C",
			red: "#EC2049",
			orange: "#F26B38",
			yellow: "#F7DB4F",
			green: "#2F9599",
			blue: "#1E3F5A",
			gray: "#EFEFEF",
			darkgray: "#4d4d4d",
			smoke: "#848884",
			silver: "#C0C0C0",
			glaucous: "#6082B6",
			charcoal: "#242F36",
			pewter: "#606263",
			orchid: "#DA70D6",
		},
		fontFamily: {
			sans: ["Roboto Mono", "monospace"],
			serif: ["Poppins", "sans-serif"],
			inter: ["Inter", "sans-serif"],
		},
		extend: {
			keyframes: {
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
			},
			animation: {
				"fade-out": "fade-out 1s ease-in-out",
			},
		},
	},
	plugins: [],
}
