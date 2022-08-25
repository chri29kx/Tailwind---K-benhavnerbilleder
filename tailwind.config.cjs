/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Grey: "#BDBDBD",
      Dark_Grey: "#7D7D7D",
      White: "#FBFCFC",
      Darker_Grey: "#3D3D3D",
      Light_Grey: "#E3E3E3",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
