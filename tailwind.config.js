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
          400: "#b3aeae",
          600: "#787070",
          700: "#8b4d4d",
          900: "#3a0202",
          "400_01": "#bfaeae",
          "700_01": "#8c5656",
        },
        red: { 300: "#cc8989" },
        black: { "900_3f": "#0000003f" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        abhayalibreextrabold: "Abhaya Libre ExtraBold",
        aclonica: "Aclonica",
        inter: "Inter",
      },
      textShadow: {
        ts1: "0px 4px  4px #0000003f",
        ts: "3px 4px  4px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
