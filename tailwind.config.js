// import variables from "./src/assets/scss/variables.scss";
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1976d2",
        "primary-dark": "#9C80EA",
        "primary-light": "#63a4ff",
      },
    },
  },
  plugins: [],
};
