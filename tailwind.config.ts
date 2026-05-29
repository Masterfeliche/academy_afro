import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          base: "#040A14",
          surface: "#0C1829",
          elevated: "#141E2E",
          primary: "#0B1F5C",
          accent: "#F47A20",
          ink: "#D1D9E6",
          frost: "#F1F5F9",
          muted: "#8B9AAB",
          border: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 25px 50px -12px rgba(0, 0, 0, 0.55)",
        card: "0 10px 40px -10px rgba(0, 0, 0, 0.45)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
