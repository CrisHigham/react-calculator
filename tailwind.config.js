/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,ttf}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['offside', 'mono'],
      },
    },
  },
  plugins: [],
}

