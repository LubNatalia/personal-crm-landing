// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Unicode ranges of the font subsets, as published by Fontsource
const CYRILLIC = "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116";
const LATIN =
  "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD";

const FONTS_DIR = "./src/assets/fonts";

export default defineConfig({
  output: "static",
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  // Manrope is self-hosted: variable font files live in src/assets/fonts, no external requests
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Manrope",
      cssVariable: "--font-manrope",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: [`${FONTS_DIR}/manrope-cyrillic-wght-normal.woff2`],
            weight: "200 800",
            style: "normal",
            unicodeRange: [CYRILLIC],
          },
          {
            src: [`${FONTS_DIR}/manrope-latin-wght-normal.woff2`],
            weight: "200 800",
            style: "normal",
            unicodeRange: [LATIN],
          },
        ],
      },
    },
  ],
});
