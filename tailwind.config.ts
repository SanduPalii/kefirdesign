import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          green: "#93B897",
          glass: "#2D4B37",
          deep: "#1A2E21",
        },
        glass: {
          emerald: "rgba(16, 185, 129, 0.1)",
          forest: "rgba(5, 46, 22, 0.4)",
          border: "rgba(255, 255, 255, 0.1)",
          highlight: "rgba(255, 255, 255, 0.05)",
        },
        nude: {
          white: "#F8F6F2",
          light: "#EAE4DC",
          sand: "#D8CFC4",
          rose: "#E8DED8",
          dark: "#C4B8A8",
        },
        warm: {
          gray: "#3A3A3A",
          grayLight: "#5A5A5A",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Helvetica Neue", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        caustic: {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(2%, 1%) rotate(2deg) scale(1.05)" },
          "66%": { transform: "translate(-1%, 2%) rotate(-1deg) scale(0.98)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "caustic-flow": "caustic 8s ease-in-out infinite",
      },
      letterSpacing: {
        elegant: "0.2em",
        wide: "0.35em",
      },
      animationDelay: {
        "200": "200ms",
        "400": "400ms",
        "600": "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
