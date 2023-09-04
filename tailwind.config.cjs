/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/oracle-girl.jpg')"
      },
      colors: {
        'cloud-burst': {
          '50': '#f1f5fd',
          '100': '#dfe9fa',
          '200': '#c6d9f7',
          '300': '#9fc0f1',
          '400': '#729fe8',
          '500': '#517de0',
          '600': '#3c61d4',
          '700': '#334ec2',
          '800': '#2f419e',
          '900': '#2a3a7e',
          '950': '#202852',
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      keyframes: {
        fadeFromRight: {
          '0%': {opacity: 0,transform: 'translateX(-30%)'},
          '100%': {opacity: 1,transform: 'translateX(0)'}
        },
        fadeToLeft: {
          '0%': {opacity: 1,transform: 'translateX(0)'},
          '100%': {opacity: 0,transform: 'translateX(-30%)'},
        },
      },
      animation : {
        'fade-from-right' : 'fadeFromRight 1s linear',
        'fade-to-left' : 'fadeToLeft 1s linear',
      }
    },
  },
  plugins: [],
};
