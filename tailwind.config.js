/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '900': '900px', // Custom screen size
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

