import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f5f7",
          100: "#e1e7ec",
          200: "#c2cdd7",
          300: "#9bacbc",
          400: "#6c8195",
          500: "#475d72",
          600: "#324558",
          700: "#22324380",
          800: "#16242f",
          900: "#0f1e2e",
          950: "#0a141f",
          DEFAULT: "#0f1e2e",
        },
        gold: {
          50: "#fbf8f0",
          100: "#f5edd8",
          200: "#ecd9af",
          300: "#e0c07d",
          400: "#d4a955",
          500: "#c5a24a",
          600: "#a9853a",
          700: "#876531",
          800: "#71542e",
          900: "#60472b",
          DEFAULT: "#c5a24a",
        },
        charcoal: {
          DEFAULT: "#2f2f2f",
          light: "#4a4a4a",
        },
        cloud: {
          DEFAULT: "#f2f2f2",
          dark: "#ededed",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-raleway)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        menu: "0.14em",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        soft: "0 2px 18px -8px rgba(15, 30, 46, 0.18)",
        card: "0 18px 50px -24px rgba(15, 30, 46, 0.35)",
        gold: "0 18px 40px -18px rgba(197, 162, 74, 0.45)",
        lift: "0 30px 60px -28px rgba(15, 30, 46, 0.45)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "kenburns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        kenburns: "kenburns 16s ease-out both",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
