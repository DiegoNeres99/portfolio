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
        cyan: "rgb(var(--color-cyan) / <alpha-value>)",
        textPrimary: "rgb(var(--color-text-primary) / <alpha-value>)",
        textMuted: "rgb(var(--color-text-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Space Mono", "JetBrains Mono", "monospace"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 255, 136, 0.25)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgb(var(--color-grid-line) / 0.08) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-grid-line) / 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
