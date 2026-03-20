import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /** Deep navy page background */
          base: "#040A14",
          /** Cards, panels, nav chrome */
          surface: "#0C1829",
          /** Slightly lifted surfaces */
          elevated: "#141E2E",
          /** Brand navy — buttons, key UI */
          primary: "#0B1F5C",
          accent: "#F47A20",
          /** Primary text on dark */
          ink: "#D1D9E6",
          /** Headlines / high emphasis */
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
