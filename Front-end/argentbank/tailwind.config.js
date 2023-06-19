/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        errorShaking: "errorShaking 0.25s ease-in-out",
      },
      keyframes: {
        errorShaking: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
        },
      },
      fontFamily: {
        avenir: ["Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#2c3e50",
        secondary: "#00bc77",
        tertiary: "#12002b",
      },
      plugins: [],
    },
  },
};
