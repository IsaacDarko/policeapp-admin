/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#161D31",
        secondary: "#333333",
        accentPink: "#E83E8C"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        '128': '32rem',
        '130': '35.0652rem',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
