/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // Astral ARRA palette: violet, pearl white and gold,
      // with neon blue and soft blues as the light that runs through it.
      colors: {
        night: {
          DEFAULT: "#120A2E", // page background
          deep: "#0C0620",
          raised: "#1C1245", // nav, panels
          line: "#33266B",
        },
        amethyst: {
          200: "#DCD0FF",
          300: "#C4B0FF",
          400: "#A38BFA",
          500: "#7F5AF0",
          600: "#6440D6",
          700: "#4C2FA8",
        },
        pearl: {
          DEFAULT: "#F6F2FF",
          muted: "#CFC6EA",
          dim: "#9C92BF",
        },
        gold: {
          300: "#F0DCA0",
          DEFAULT: "#D9B45A",
          600: "#B8923A",
        },
        neon: {
          DEFAULT: "#2BD2FF",
          deep: "#1A8CFF",
        },
        ice: {
          100: "#E4F6FF",
          200: "#BDE8FF",
          300: "#8FD3FF",
          400: "#6FA8FF",
        },
      },
      fontFamily: {
        display: ['"Forum"', "Georgia", "serif"],
        body: ['"Literata Variable"', '"Literata"', "Georgia", "serif"],
      },
      backgroundImage: {
        hero: "url('/images/oracle-girl.png')",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      dropShadow: {
        neon: ["0 0 2px #BDE8FF", "0 0 10px #2BD2FF", "0 0 32px rgba(43, 210, 255, 0.55)"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(43, 210, 255, 0.6), 0 0 18px rgba(43, 210, 255, 0.35)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
