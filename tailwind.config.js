/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#0d0d0d",
        panel: "#121212",
        border: "#242424",
        accent: "#00FF88",
        cyan: "#00D7FF",
        textPrimary: "#f5f5f5",
        textMuted: "#9ca3af",
      },
      fontFamily: {
        display: ["Space Mono", "JetBrains Mono", "monospace"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 255, 136, 0.25)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
