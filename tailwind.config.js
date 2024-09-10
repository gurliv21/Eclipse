/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          '100%': {
            'background-position': '0% 0%',
          },
        },
      },
      animation: {
        'shine-pulse': 'shine-pulse 1.5s infinite',
      },
    },
  },
  plugins: [],
}

