// prettier.config.js
module.exports = {
  plugins: [
    require("prettier-plugin-organize-imports"),
    require("prettier-plugin-astro"),
    require("prettier-plugin-tailwindcss"),
  ],
  tailwindFunctions: ["tv"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
