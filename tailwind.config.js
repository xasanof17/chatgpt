/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        grey: "#dbdbe2",
        black: "#13141c",
        dark: "#2e3440",
        light: "#313e4d",
        blue: "#334eff",
      },
    },
  },
  plugins: [],
};
