/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mm-blue': '#002855',
        'mm-dark-blue': '#1A283C',
        'mm-orange': '#FF7F32'
      }
    },
  },
  plugins: [],
}

