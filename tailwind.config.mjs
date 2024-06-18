/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'border-radius-animation': {
					'0%, 100%': {
						borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
					},
					'50%': {
						borderRadius: '63% 37% 33% 67% / 30% 53% 47% 70%'
					},
				}
			},
			animation: {
				'border-radius': 'border-radius-animation 5s ease-in-out infinite alternate',
			},
		},
	},
	plugins: [],
}
