/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				red: {
					1: 'hsl(0, 100%, 67%)'
				},
				yellow: {
					1: 'hsl(39, 100%, 56%)'
				},
				green: {
					1: 'hsl(166, 100%, 37%)'
				},
				blue: {
					1: 'hsl(252, 100%, 67%)',
					2: 'hsla(256, 72%, 46%, 1)',
					3: 'hsl(241, 81%, 54%)',
					4: 'hsl(234, 85%, 45%)',
					5: 'hsla(241, 72%, 46%, 0)',
				},
				neutral: {
					1: 'hsl(221, 100%, 96%)',
					2: 'hsl(241, 100%, 89%)',
					3: 'hsl(224, 30%, 27%)',
				}
			}
		},
	},
	plugins: [],
}
