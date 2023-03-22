/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#38bdf8",
        secondary: "#9ca3af",
      },
      letterSpacing: { tightest: "-.075em" },
    },
  },
  plugins: [],
};
