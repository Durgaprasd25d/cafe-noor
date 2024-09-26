/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#6F4C3E', // Define your coffee brown color here
          600: '#5C3B32', // Optional: a slightly darker shade for hover effects
        },
      },
    },
  },
  plugins: [],
}
