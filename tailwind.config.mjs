/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1863DC',
          'blue-dark': '#154AB8',
        },
        background: {
          light: '#F4F4F4',
        },
      },
    },
  },
  plugins: [],
};
