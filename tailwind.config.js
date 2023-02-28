/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        grey: {
          100: "#dbdbe2",
          200: "#666668",
        },
        black: "#13141c",
        dark: {
          100: "#2e3440",
          200: "#dadada",
        },
        light: "#313e4d",
        blue: "#334eff",
      },
    },
  },
  plugins: [],
};
