/** @type {import('tailwindcss').Config} */
export default {
  mode: "JIT",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "indigo-dark": "#4338CA",
        "indigo-light": "#6366F1",
        black: "#171717",
        "primary-dark": "#404040",
        "primary-medium": "#525252",
        primary: "#737373",
        "primary-light": "#A3A3A3",
        "primary-lightest": "#E5E5E5",
        "input-field": "#FAFAFA",
        "red-dark": "#991B1B",
        "red-light": "#DC2626",
      },
      screens: {
        tablet: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
