const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
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
          fg: "rgb(var(--positive-fg))",
        },
        warning: {
          DEFAULT: "rgb(var(--warning))",
          fg: "rgb(var(--warning-fg))",
        },
        critical: {
          DEFAULT: "rgb(var(--critical))",
          fg: "rgb(var(--critical-fg))",
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
      animation: {
        zoom: "zoom .3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        fade: "fade .2s",
        fadeOut: "fade reverse .2s ease-in",
      },
      fontFamily: {
        sans: ["Inter var", fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(var(--fg))",
            h1: {
              color: "rgb(var(--fg))",
            },
            h2: {
              color: "rgb(var(--fg-2))",
            },
            h3: {
              color: "rgb(var(--fg-3))",
            },
            a: {
              color: "rgb(var(--fg))",
            },
            strong: {
              color: "rgb(var(--fg))",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
