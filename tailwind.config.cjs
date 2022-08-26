/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
    },
    colors: {
      Grey: "#BDBDBD",
      Dark_Grey: "#7D7D7D",
      White: "#FBFCFC",
      Darker_Grey: "#3D3D3D",
      Light_Grey: "#cbcbcb",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
