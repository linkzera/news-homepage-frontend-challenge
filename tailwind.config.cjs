/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    screens:{
      sm: '375px',
      xl: '1440px'
    },
    extend: {
      colors: {
        "orange-soft": "hsl(35, 77%, 62%)",
        "red-soft": "hsl(5, 85%, 63%)",
        "white-off": "hsl(36, 100%, 99%)",
        "blue-grayish": "hsl(233, 8%, 79%)",
        "blue-dark-grayish": "hsl(236, 13%, 42%)",
        "blue-very-dark": "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
