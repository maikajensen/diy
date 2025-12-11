/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff1f2', // Very light pink
          100: '#ffe4e6', // Light pink
          200: '#fecdd3', // Soft pink
          300: '#fda4af', // Rose pink
          400: '#fb7185', // Medium pink
          500: '#f43f5e', // Bright pink
          600: '#e11d48', // Darker pink
          700: '#be123c', // Deep pink
          800: '#9f1239', // Dark deep pink
          900: '#881337', // Very dark pink
        },
        soft: {
          cream: '#fff5f5', // Very soft cream/pink
          pink: '#ffe4e6', // Soft pink background
          rose: '#fecdd3', // Rose accent
          text: '#881337', // Dark pink text
        },
        charcoal: '#4a4a4a', // Softer charcoal
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
