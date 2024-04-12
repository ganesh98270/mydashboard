/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '3xl': { 'max': '1799px' },
      // => @media (max-width: 1799px) { ... }

      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'xmd': { 'max': '979px' },
      // => @media (max-width: 979px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        'blue': '#0B06F6',
        'lightblue': '#E7DDF9',
        'purpal': '#941CB0',
        'darkpurpal': '#701486',
        'grey': '#666666',
        'lightgrey': '#E8E8E8',
        'pink': '#E19EF1',
        'black': '#333333'
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      boxShadow: {
        '3xl': '0px 2px 5px 0px #0000001A, -2px 8px 8px 0px #00000017, -4px 18px 11px 0px #0000000D, -7px 33px 13px 0px #00000003, -12px 51px 15px 0px #00000000',
        '4xl': '-3px 10px 30px 3px #EBDFFF26'
      },

    },
  },
  plugins: [],
};
