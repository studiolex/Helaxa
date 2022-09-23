module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: "#187D35",
      lightgreen: "#6FCB89",
      black: "#414141",
      lightgrey: "#F8F8F8",
      darkgrey: "#C4C4C4",
      white: "#FFFFFF",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      mono: ["Akira", "Arial", "sans-serif"],
      serif: ["Gotham", "Arial", "sans-serif"],
      sans: ["Raleway", "Arial", "serif"],
    },
    extend: {
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridColumnStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        25: "25",
      },
      gridColumnEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        25: "25",
      },
    },
    screens: {
      "2xl": { max: "1660px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1350px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      nav: { max: "870px" },
      // => @media (max-width: 767px) { ... }

      md: { max: "820px" },
      // => @media (max-width: 820px) { ... }

      sm: { max: "650px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "500px" },
      // => @media (max-width: 639px) { ... }

      ss: { max: "400px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
