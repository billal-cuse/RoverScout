/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(101 22 112)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"],
      },
      backgroundImage: {
        sliderBg : "/public/7517.jpg"
      },
    },
  },
  plugins: [],
};
