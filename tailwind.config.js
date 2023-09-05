import defaultTheme from "tailwindcss/defaultTheme";
import tailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'DM Mono'", ...defaultTheme.fontFamily.mono],
        sans: ["'Manrope'", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -40%) scale(0.8)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
        contentHide: {
          from: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
          to: { opacity: 0, transform: "translate(-50%, -40%) scale(0.8)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentHide: "contentHide 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [tailwindTypography],
};
