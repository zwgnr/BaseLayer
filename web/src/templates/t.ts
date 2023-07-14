module.exports = {
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "rgb(var(--surface))",
          2: "rgb(var(--surface-2))",
          3: "rgb(var(--surface-3))",
          4: "rgb(var(--surface-4))",
        },
        fg: {
          DEFAULT: "rgb(var(--fg))",
          2: "rgb(var(--fg-2))",
          3: "rgb(var(--fg-3))",
          4: "rgb(var(--fg-4))",
          5: "rgb(var(--fg-5))",
          6: "rgb(var(--fg-6))",
        },
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        focus: "rgb(var(--focus))",
        primary: {
          DEFAULT: "rgb(var(--primary))",
          fg: "rgb(var(--primary-fg))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          fg: "rgb(var(--secondary-fg))",
        },
        positive: {
          DEFAULT: "rgb(var(--positive))",
        },
        warning: {
          DEFAULT: "rgb(var(--warning))",
        },
        critical: {
          DEFAULT: "rgb(var(--critical))",
        },
      },
      keyframes: {
        zoom: {
          from: { transform: "scale(0.8)" },
          to: { transform: "scale(1)" },
        },
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};