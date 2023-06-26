/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom1: "0 1px 8px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        lightBlack: "#4b4b4b",
      },
    },
  },
  plugins: [],
};
