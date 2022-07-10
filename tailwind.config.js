/*@type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7A0BC0",
      },
    },
  },
  plugins: [],
};
