/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#1679AB",
        bgOverlay: "-webkit-linear-gradient(top,rgb(0, 0, 0, 0.9) 10%,rgb(0, 0, 0, 0.2) 50%,rgb(0, 0, 0)"
      }
    },
  },
  plugins: [],
}

