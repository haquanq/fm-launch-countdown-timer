/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    fontWeight: {},
    colors: {
      red: {
        300: "var(--clr-red-300)",
        500: "var(--clr-red-500)",
      },
      blue: {
        100: "var(--clr-blue-100)",
        500: "var(--clr-blue-500)",
        800: "var(--clr-blue-800)",
        900: "var(--clr-blue-900)",
      },
      white: "var(--clr-white)",
    },
    screens: {
      md: "36em",
      lg: "48em",
    },
    extend: {
      height: {
        "2/1": "200%",
      },
      borderRadius: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
