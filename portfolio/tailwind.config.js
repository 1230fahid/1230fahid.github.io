/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '10%': { width: '0' },
          '45%': { width: '100%' },
          '55%': { width: '100%' },
          '90%': { width: '0' },
          '100%': { width: '0' }
        }
      },
      animation: {
        typing: 'typing 3.5s steps(30, end) infinite'
      }
    },
  },
  plugins: [],
}

