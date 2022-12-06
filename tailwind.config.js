/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern1": "url('./img/hero1.jpg')",
        "hero-pattern2": "url('./img/hero2.jpg')",
        "hero-pattern3": "url('./img/video.jpg')",
        "map-pattern": "url('./img/map.jpg')",
      },
    },
  },
  plugins: [],
};
