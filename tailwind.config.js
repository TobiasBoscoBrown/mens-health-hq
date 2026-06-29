/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1B2A",
          900: "#0A1420",
          800: "#0E1B2A",
          700: "#16293D",
          600: "#22394F",
        },
        teal: {
          DEFAULT: "#1F7A8C",
          dark: "#176475",
          light: "#3A9BAE",
        },
        sand: "#F7F5F1",
        mist: "#EEF2F4",
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: "72rem" },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14, 27, 42, 0.18)",
        card: "0 4px 24px -8px rgba(14, 27, 42, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: { "fade-up": "fade-up 0.7s ease-out forwards" },
    },
  },
  plugins: [],
};
