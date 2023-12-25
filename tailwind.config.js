module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#e3e3de",
          400: "#c9c9c9",
          500: "#979797",
          600: "#7c7c7c",
          900: "#141414",
          "900_75": "#14141475",
          "500_01": "#a5a5a5",
          "600_01": "#787878",
          "400_01": "#b3b3b3",
          "400_02": "#b4b4b4",
        },
        blue_gray: {
          100: "#cecece",
          400: "#8b8989",
          900: "#2f2f2f",
          "100_01": "#cccccc",
          "100_02": "#d0d0d0",
        },
        white: {
          A700_90: "#ffffff90",
          A700_99: "#ffffff99",
          A700_75: "#ffffff75",
          A700_87: "#ffffff87",
          A700: "#ffffff",
        },
        black: { 900: "#000000" },
        yellow: {
          900: "#f47521",
          "900_87": "#f4752187",
          "900_7e": "#f475217e",
        },
        lime: { "900_7f": "#7131077f" },
      },
      fontFamily: { archivo: "Archivo", oswald: "Oswald" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
