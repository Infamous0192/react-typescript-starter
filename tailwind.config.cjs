/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      heading: ['Noto Serif Khojki', 'sans-serif'],
      body: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#852C4D',
          1: '#F6F6EE',
          2: '#DCD8D6',
          3: '#606B76',
          4: '#3B444E',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
