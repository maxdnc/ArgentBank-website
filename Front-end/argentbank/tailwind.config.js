/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#2c3e50",
    },
    plugins: [],
  },
}};
