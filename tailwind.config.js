import { animate } from "motion";

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boska: ['Boska', 'serif'],
      },
      animation: {
        spinSlow: 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}