import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050505",
          secondary: "#111111",
        },
        card: "#1D1D1D",
        text: {
          primary: "#FFFFFF",
          secondary: "#BFBFBF",
        },
        accent: {
          DEFAULT: "#1D73E8",
          hover: "#4D9CFF",
        },
        divider: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
