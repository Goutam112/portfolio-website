/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050c16",
        secondary: "#a6b0c3",
        button: 'rgba(255, 255, 255, 0.35)',
        tertiary: "#101d30",
        "black-100": "#0d1625",
        "black-200": "#030f25",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1e2635",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(5, 12, 22, 1)), url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};