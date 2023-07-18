export const tailwindPreset = `module.exports = {
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
`;

export const stylesPreset = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --origin: translateX(8px);

    --surface: 250 250 250; /* #fafafa */
    --surface-2: 229 229 229; /* #e5e5e5 */
    --surface-3: 212 212 212; /* 	#d4d4d4 */
    --surface-4: 163 163 163; /* 	#a3a3a3 */

    --border: 229 229 229; /* #e5e5e5 */
    --input: 229 229 229; /* #e5e5e5 */
    --focus: 14 165 233; /* #0ea5e9 */

    /* fg hierarchy */
    --fg: 10 10 10; /* #0a0a0a */
    --fg-2: 23 23 23; /* #171717 */
    --fg-3: 38 38 38; /* #262626 */
    --fg-4: 64 64 64; /* #404040 */
    --fg-5: 82 82 91; /* #52525b */
    --fg-6: 115 115 115; /* #737373 */

    --primary: 9 229 123; /* #09e57b  */
    --primary-fg: 10 10 10; /* #0a0a0a */

    --secondary: 10 10 10; /* #0a0a0a*/
    --secondary-fg: 255 255 255; /* #fafafa  */

    --positive: 109 211 46; /* #6DD32E */
    --positive-fg: 10 10 10; /* #0a0a0a */

    --warning: 237 227 40; /* #EDE328 */
    --warning-fg: 10 10 10; /* #0a0a0a */

    --critical: 255 82 56; /* #FF5238 */
    --critical-fg: 10 10 10; /* #0a0a0a */
  }
  [data-theme="dark"] {
    --surface: 10 10 10; /* 	#0f172a */
    --surface-2: 30 41 59; /* #1e293b */
    --surface-3: 51 65 85; /* 	#334155 */
    --surface-4: 71 85 105; /* 	#475569 */

    --border: 30 41 59; /* #1e293b  */
    --input: 30 41 59; /* #1e293b  */
    --focus: 14 165 233; /* #0ea5e9 */

    /* fg hierarchy */
    --fg: 248 250 252; /*  #f8fafc*/
    --fg-2: 241 245 249; /* #f1f5f9*/
    --fg-3: 226 232 240; /* #e2e8f0 */
    --fg-4: 203 213 225; /* #cbd5e1 */
    --fg-5: 148 163 184; /* #94a3b8 */
    --fg-6: 100 116 139; /* #64748b */

    --primary: 9 229 123; /* #09e57b   */
    --primary-fg: 10 10 10; /* #0a0a0a */

    --secondary: 250 250 250; /* #fafafa */
    --secondary-fg: 10 10 10; /* #0a0a0a */

    --positive: 109 211 46; /* #6DD32E */
    --positive-fg: 10 10 10; /* #0a0a0a */

    --warning: 237 227 40; /* #EDE328 */
    --warning-fg: 10 10 10; /* #0a0a0a */

    --critical: 255 82 56; /* #FF5238 */
    --critical-fg: 10 10 10; /* #0a0a0a */
  }
  /* clears the ‘X’ from Internet Explorer */
  input[type="search"]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  input[type="search"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
}

.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid #09e57b;
}
`;
