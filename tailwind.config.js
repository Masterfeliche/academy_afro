/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1565C0',    // Your Blue
        secondary: '#FF9800',  // Your Orange
        dark: '#111111',       // Your Black
        light: '#F5F5F5',      // Your Light Gray
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #111 60%, #1565C0 100%)',
      }
    },
  },
  plugins: [],
}
