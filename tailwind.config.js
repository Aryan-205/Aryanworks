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
      keyframes: {
        spinReverse: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        spinSlow: 'spin 5s linear infinite',
        spinSmall: 'spin 5s linear infinite',
        spinSmall1: 'spin 10s linear infinite',
        spinReverseSlow: 'spinReverse 10s linear infinite',
        spinReverseSmall: 'spinReverse 10s linear infinite',
      },
    },
  },
  plugins: [],
}