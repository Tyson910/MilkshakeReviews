/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        primary: '#00AEEF',       // Primary blue color representing freshness and adventure
        secondary: '#008080',    // Teal color for a modern and refreshing secondary option
        accent: '#76D7C4',       // Soft turquoise color symbolizing refreshment and variety
        success: '#8BC34A',      // Lively green color indicating positive reviews and enjoyment
        warning: '#FF9800',      // Warm orange color suggesting uniqueness and excitement
        error: '#E53935',        // Bold red color for highlighting important information
        gray: {
          100: '#F5F5F5',       // Light gray color for subtle backgrounds and contrasts
          200: '#EEEEEE',       // Slightly darker gray color for additional shading and separation
          300: '#E0E0E0',       // A softer gray color for lighter text or secondary elements
          400: '#BDBDBD',       // Medium gray color for borders and dividers
          500: '#9E9E9E',       // Neutral gray color for regular text and icons
          600: '#757575',       // Dark gray color for headings or emphasis
          700: '#616161',       // Deeper gray color for active states or important elements
          800: '#424242',       // Rich charcoal gray color for darker backgrounds or overlays
          900: '#212121',       // Black color for text, icons, and strong contrast
        },
      },
		},
	},
  plugins: [
    require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
  ],
}
