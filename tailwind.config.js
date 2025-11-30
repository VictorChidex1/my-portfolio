/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scan: "scan 4s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
      colors: {
        // We are adding your specific FoodFlow colors here
        brand: {
          dark: "#0f172a", // The Dark Blue (Background)
          orange: "#f97316", // The Vibrant Orange (Highlights)
          light: "#cbd5e1", // The Light Text color
        },
      },
    },
  },
  plugins: [],
};
