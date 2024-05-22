/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // accent: {
        //   1: "hsl(var(--color-accent1) / <alpha-value> )",
        //   2: " hsl(var(--color-accent2) / <alpha-value> )",
        // },

        // backg: "hsl(var(--color-backg) / <alpha-value> )",
        // content: "hsl(var(--color-backg) / <alpha-value> )",

        baseTextColor: "var(--text-color)",
        baseTextColor2: "var(--style-color1)",
        baseBgColor: "var(--bg-color)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
