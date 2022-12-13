/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1024px", //1280
        "2xl": "1024px" //1600
      },
    },
    extend: {},
  },
  plugins: [],
};
