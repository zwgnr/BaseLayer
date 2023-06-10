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
        text: {
          DEFAULT: "rgb(var(--text))",
          2: "rgb(var(--text-2))",
          3: "rgb(var(--text-3))",
          4: "rgb(var(--text-4))",
          5: "rgb(var(--text-5))",
          6: "rgb(var(--text-6))",
        },
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        focus: "rgb(var(--focus))",
        primary: {
          DEFAULT: "rgb(var(--primary-500))",
          100: "rgb(var(--primary-100))",
          200: "rgb(var(--primary-200))",
          300: "rgb(var(--primary-300))",
          400: "rgb(var(--primary-400))",
          500: "rgb(var(--primary-500))",
          600: "rgb(var(--primary-600))",
          700: "rgb(var(--primary-700))",
          800: "rgb(var(--primary-800))",
          900: "rgb(var(--primary-900))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-500))",
          100: "rgb(var(--accent-100))",
          200: "rgb(var(--accent-200))",
          300: "rgb(var(--accent-300))",
          400: "rgb(var(--accent-400))",
          500: "rgb(var(--accent-500))",
          600: "rgb(var(--accent-600))",
          700: "rgb(var(--accent-700))",
          800: "rgb(var(--accent-800))",
          900: "rgb(var(--accent-900))",
        },
        positive: {
          DEFAULT: "rgb(var(--positive-500))",
          100: "rgb(var(--positive-100))",
          200: "rgb(var(--positive-200))",
          300: "rgb(var(--positive-300))",
          400: "rgb(var(--positive-400))",
          500: "rgb(var(--positive-500))",
          600: "rgb(var(--positive-600))",
          700: "rgb(var(--positive-700))",
          800: "rgb(var(--positive-800))",
          900: "rgb(var(--positive-900))",
        },
        warning: {
          DEFAULT: "rgb(var(--warning-500))",
          100: "rgb(var(--warning-100))",
          200: "rgb(var(--warning-200))",
          300: "rgb(var(--warning-300))",
          400: "rgb(var(--warning-400))",
          500: "rgb(var(--warning-500))",
          600: "rgb(var(--warning-600))",
          700: "rgb(var(--warning-700))",
          800: "rgb(var(--warning-800))",
          900: "rgb(var(--warning-900))",
        },
        critical: {
          DEFAULT: "rgb(var(--critical-500))",
          100: "rgb(var(--critical-100))",
          200: "rgb(var(--critical-200))",
          300: "rgb(var(--critical-300))",
          400: "rgb(var(--critical-400))",
          500: "rgb(var(--critical-500))",
          600: "rgb(var(--critical-600))",
          700: "rgb(var(--critical-700))",
          800: "rgb(var(--critical-800))",
          900: "rgb(var(--critical-900))",
        },
      },
      fontFamily: {
        sans: ["Inter var", fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "rgb(var(--text))",
            h1: {
              color: "rgb(var(--text))",
            },
            h2: {
              color: "rgb(var(--text-2))",
            },
            h3: {
              color: "rgb(var(--text-3))",
            },
            a: {
              color: "rgb(var(--text))",
            },
            strong: {
              color: "rgb(var(--text))",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
