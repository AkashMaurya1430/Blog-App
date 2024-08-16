/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: { 100: "#6e6e73", 50: "#f5f5f7", 0: "#FFFFFF" },
        dark: { 100: "#1b1b1f", 50: "#6c7880" },
        primary: { 100: "#0a1c8f", 50: "#3d2ccf", 25: "#eef4ff" },
        secondary: { 100: "#6941c6", 50: "#F9F5FF" },
      },
    },
  },
  plugins: [],
};
