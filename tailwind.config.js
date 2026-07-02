/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        textPrimary: "rgb(var(--color-text-primary) / <alpha-value>)",
        textMuted: "rgb(var(--color-text-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(232, 213, 176, 0.18)",
        "glow-lg": "0 0 48px rgba(232, 213, 176, 0.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgb(var(--color-grid-line) / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-grid-line) / 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
