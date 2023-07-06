export const tailwindPreset = `module.exports = {
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'rgb(var(--surface))',
          2: 'rgb(var(--surface-2))',
          3: 'rgb(var(--surface-3))',
          4: 'rgb(var(--surface-4))',
        },
        text: {
          DEFAULT: 'rgb(var(--text))',
          2: 'rgb(var(--text-2))',
          3: 'rgb(var(--text-3))',
          4: 'rgb(var(--text-4))',
          5: 'rgb(var(--text-5))',
          6: 'rgb(var(--text-6))',
        },
        border: 'rgb(var(--border))',
        input: 'rgb(var(--input))',
        focus: 'rgb(var(--focus))',
        primary: {
          DEFAULT: 'rgb(var(--primary-500))',
          100: 'rgb(var(--primary-100))',
          200: 'rgb(var(--primary-200))',
          300: 'rgb(var(--primary-300))',
          400: 'rgb(var(--primary-400))',
          500: 'rgb(var(--primary-500))',
          600: 'rgb(var(--primary-600))',
          700: 'rgb(var(--primary-700))',
          800: 'rgb(var(--primary-800))',
          900: 'rgb(var(--primary-900))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-500))',
          100: 'rgb(var(--secondary-100))',
          200: 'rgb(var(--secondary-200))',
          300: 'rgb(var(--secondary-300))',
          400: 'rgb(var(--secondary-400))',
          500: 'rgb(var(--secondary-500))',
          600: 'rgb(var(--secondary-600))',
          700: 'rgb(var(--secondary-700))',
          800: 'rgb(var(--secondary-800))',
          900: 'rgb(var(--secondary-900))',
        },
        positive: {
          DEFAULT: 'rgb(var(--positive-500))',
          100: 'rgb(var(--positive-100))',
          200: 'rgb(var(--positive-200))',
          300: 'rgb(var(--positive-300))',
          400: 'rgb(var(--positive-400))',
          500: 'rgb(var(--positive-500))',
          600: 'rgb(var(--positive-600))',
          700: 'rgb(var(--positive-700))',
          800: 'rgb(var(--positive-800))',
          900: 'rgb(var(--positive-900))',
        },
        warning: {
          DEFAULT: 'rgb(var(--warning-500))',
          100: 'rgb(var(--warning-100))',
          200: 'rgb(var(--warning-200))',
          300: 'rgb(var(--warning-300))',
          400: 'rgb(var(--warning-400))',
          500: 'rgb(var(--warning-500))',
          600: 'rgb(var(--warning-600))',
          700: 'rgb(var(--warning-700))',
          800: 'rgb(var(--warning-800))',
          900: 'rgb(var(--warning-900))',
        },
        critical: {
          DEFAULT: 'rgb(var(--critical-500))',
          100: 'rgb(var(--critical-100))',
          200: 'rgb(var(--critical-200))',
          300: 'rgb(var(--critical-300))',
          400: 'rgb(var(--critical-400))',
          500: 'rgb(var(--critical-500))',
          600: 'rgb(var(--critical-600))',
          700: 'rgb(var(--critical-700))',
          800: 'rgb(var(--critical-800))',
          900: 'rgb(var(--critical-900))',
        },
      },
    },
  },
};`;

export const stylesPreset = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --arrow-size: 12px;
  }
  [data-theme="light"] {
    --surface: 250 250 250; /* #fafafa */
    --surface-2: 229 229 229; /* #e5e5e5 */
    --surface-3: 212 212 212; /* 	#d4d4d4 */
    --surface-4: 163 163 163; /* 	#a3a3a3 */

    --border: 229 229 229; /* #e5e5e5 */
    --input: 229 229 229; /* #e5e5e5 */
    --focus: 199 89 48; /* sky-500 */

    /* text hierarchy */
    --text: 10 10 10; /* #0a0a0a */
    --text-2: 23 23 23; /* #171717 */
    --text-3: 38 38 38; /* #262626 */
    --text-4: 64 64 64; /* #404040 */
    --text-5: 82 82 91; /* #52525b */
    --text-6: 115 115 115; /* #737373 */

    /*  primary #C269E9 */
    --primary-100: 252 226 253; /* ⬅ #FCE2FD */
    --primary-200: 246 197 252; /* ⬅ #F6C5FC */
    --primary-300: 234 166 248; /* ⬅ #EAA6F8 */
    --primary-400: 218 142 241; /* ⬅ #DA8EF1 */
    --primary-500: 194 105 233; /* ⬅ #C269E9 */
    --primary-600: 154 76 200; /* ⬅ #9A4CC8 */
    --primary-700: 117 52 167; /* ⬅ #7534A7 */
    --primary-800: 83 33 135; /* ⬅ #532187 */
    --primary-900: 59 20 111; /* ⬅ #3B146F */

    /*  secondary #2B91FF */
    --secondary-100: 212 241 255; /* #D4F1FF */
    --secondary-200: 170 223 255; /* #AADFFF */
    --secondary-300: 127 201 255; /* #7FC9FF */
    --secondary-400: 96 180 255; /* #60B4FF */
    --secondary-500: 43 145 255; /* #2B91FF */
    --secondary-600: 31 112 219; /* #1F70DB */
    --secondary-700: 21 83 183; /* #1553B7 */
    --secondary-800: 13 58 147; /* #0D3A93 */
    --secondary-900: 8 41 122; /* #08297A */

    /* positive  #6DD32E  */
    --positive-100: 237 252 213; /* #EDFCD5 */
    --positive-200: 216 250 172; /* #D8FAAC */
    --positive-300: 185 241 128; /* #B9F180 */
    --positive-400: 153 228 94; /* #99E45E */
    --positive-500: 109 211 46; /* #6DD32E */
    --positive-600: 81 181 33; /* #51B521 */
    --positive-700: 56 151 23; /* #389717 */
    --positive-800: 36 122 14; /* #247A0E */
    --positive-900: 21 101 8; /* #156508 */

    /* warning  #EDE328  */
    --warning-100: 254 252 211; /* #FEFCD3 */
    --warning-200: 253 250 169; /* #FDFAA9 */
    --warning-300: 249 244 125; /* #F9F47D */
    --warning-400: 244 237 91; /* #F4ED5B */
    --warning-500: 237 227 40; /* #EDE328 */
    --warning-600: 203 194 29; /* #CBC21D */
    --warning-700: 170 161 20; /* #AAA114 */
    --warning-800: 137 129 12; /* #89810C */
    --warning-900: 113 106 7; /* #716A07 */

    /* critical  #FF5238 */
    --critical-100: 255 232 215; /* #FFE8D7 */
    --critical-200: 255 204 175; /* #FFCCAF */
    --critical-300: 255 170 135; /* #FFAA87 */
    --critical-400: 255 137 105; /* #FF8969 */
    --critical-500: 255 82 56; /* #FF5238 */
    --critical-600: 219 50 40; /* #DB3228 */
    --critical-700: 183 28 32; /* #B71C20 */
    --critical-800: 147 17 31; /* #93111F */
    --critical-900: 122 10 31; /* #7A0A1F */

    --arrow-background: #d4d4d4;
    --scrollbar: #a3a3a3;
  }
  [data-theme="dark"] {
    --surface: 15 23 42; /* 	#0f172a */
    --surface-2: 30 41 59; /* #1e293b*/
    --surface-3: 51 65 85; /* 	#334155 */
    --surface-4: 71 85 105; /* 	#475569 */

    --border: 71 85 105; /* #475569 */
    --input: 0 0% 90%; /* neutral-200 */
    --focus: 199 89% 48%; /* sky-500 */

    /* text hierarchy */
    --text: 248 250 252; /*  #f8fafc*/
    --text-2: 241 245 249; /* #f1f5f9*/
    --text-3: 226 232 240; /* #e2e8f0 */
    --text-4: 203 213 225; /* #cbd5e1 */
    --text-5: 148 163 184; /* #94a3b8 */
    --text-6: 100 116 139; /* #64748b */

    --arrow-background: 10 10 10; /* #0a0a0a */

    /*  primary #C269E9 */
    --primary-100: 252 226 253; /* ⬅ #FCE2FD */
    --primary-200: 246 197 252; /* ⬅ #F6C5FC */
    --primary-300: 234 166 248; /* ⬅ #EAA6F8 */
    --primary-400: 218 142 241; /* ⬅ #DA8EF1 */
    --primary-500: 194 105 233; /* ⬅ #C269E9 */
    --primary-600: 154 76 200; /* ⬅ #9A4CC8 */
    --primary-700: 117 52 167; /* ⬅ #7534A7 */
    --primary-800: 83 33 135; /* ⬅ #532187 */
    --primary-900: 59 20 111; /* ⬅ #3B146F */

    /*  secondary #2B91FF */
    --secondary-100: 212 241 255; /* #D4F1FF */
    --secondary-200: 170 223 255; /* #AADFFF */
    --secondary-300: 127 201 255; /* #7FC9FF */
    --secondary-400: 96 180 255; /* #60B4FF */
    --secondary-500: 43 145 255; /* #2B91FF */
    --secondary-600: 31 112 219; /* #1F70DB */
    --secondary-700: 21 83 183; /* #1553B7 */
    --secondary-800: 13 58 147; /* #0D3A93 */
    --secondary-900: 8 41 122; /* #08297A */

    /* positive  #6DD32E  */
    --positive-100: 237 252 213; /* #EDFCD5 */
    --positive-200: 216 250 172; /* #D8FAAC */
    --positive-300: 185 241 128; /* #B9F180 */
    --positive-400: 153 228 94; /* #99E45E */
    --positive-500: 109 211 46; /* #6DD32E */
    --positive-600: 81 181 33; /* #51B521 */
    --positive-700: 56 151 23; /* #389717 */
    --positive-800: 36 122 14; /* #247A0E */
    --positive-900: 21 101 8; /* #156508 */

    /* warning  #EDE328  */
    --warning-100: 254 252 211; /* #FEFCD3 */
    --warning-200: 253 250 169; /* #FDFAA9 */
    --warning-300: 249 244 125; /* #F9F47D */
    --warning-400: 244 237 91; /* #F4ED5B */
    --warning-500: 237 227 40; /* #EDE328 */
    --warning-600: 203 194 29; /* #CBC21D */
    --warning-700: 170 161 20; /* #AAA114 */
    --warning-800: 137 129 12; /* #89810C */
    --warning-900: 113 106 7; /* #716A07 */

    /* critical  #FF5238 */
    --critical-100: 255 232 215; /* #FFE8D7 */
    --critical-200: 255 204 175; /* #FFCCAF */
    --critical-300: 255 170 135; /* #FFAA87 */
    --critical-400: 255 137 105; /* #FF8969 */
    --critical-500: 255 82 56; /* #FF5238 */
    --critical-600: 219 50 40; /* #DB3228 */
    --critical-700: 183 28 32; /* #B71C20 */
    --critical-800: 147 17 31; /* #93111F */
    --critical-900: 122 10 31; /* #7A0A1F */

    --arrow-background: #334155;
  }
}
`;
