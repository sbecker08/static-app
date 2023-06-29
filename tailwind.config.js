/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mm-bright-blue': '#00ADFF',
        'mm-blue': '#002855',
        'mm-dark-blue': '#1A283C',
        'mm-orange': '#FF7F32'
      },
      padding: {
        'mm-scale': 'max(1.25rem, 5%)'
      }
    },
  },
  plugins: [],
}

