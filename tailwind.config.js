/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Spectral", "Georgia", "serif"],
        sans: ["Archivo", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#f3ecda",
        paper2: "#e8ddc4",
        ink: "#23201a",
        muted: "#62594b",
        teal: "#1f5560",
        rust: "#b4542a",
        gold: "#bf8f3a",
        moss: "#687a45",
        line: "#bcae8d",
        card: "#fbf6e9",
        ocean: "#ede4cc",
      },
      boxShadow: {
        cartouche: "0 26px 70px -38px rgba(35, 32, 26, 0.75)",
      },
    },
  },
  plugins: [],
};
