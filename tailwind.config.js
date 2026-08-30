/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fire: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#e11d2f",
          600: "#c4121f",
          700: "#a30f19",
          800: "#7f0e17",
          900: "#5c0d13",
        },
        ink: {
          950: "#0a0b0d",
          900: "#111318",
          800: "#181b21",
          700: "#22262e",
          600: "#2e333d",
          500: "#454b57",
        },
      },
      fontFamily: {
        sans: ["Cairo", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.06)",
        card: "0 4px 24px rgba(0,0,0,0.08)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
