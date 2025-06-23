/** @type { import("prettier").Config } */
export default {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "^(react-aria-components/(.*)$)|^(react-aria-components$)",
    "^(tailwind-variants/(.*)$)|^(tailwind-variants$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^~/(.*)$",
    "^[./]",
  ],
  proseWrap: "always",
};