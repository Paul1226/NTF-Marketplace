/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				belgrano: ['Belgrano', 'serif'],
				poppins: ['Poppins', 'sans-serif'],
			},

			colors: {
				primary: '#FA504D',
				secondary: '#2E2F38',
				tertiary: '#68F3F6',
			},

			backgroundImage:{
				'enfasis':'url(../public/hero/enfasis.svg)'
			},
			gridTemplateColumns:{
				'2p':'1fr 0.8fr'
			}
		},
	},
	plugins: [],
}
