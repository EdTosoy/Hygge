/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-violet": "#F0EFFF",
        "dark-violet": "#6650F2",
        "logo-red": "#ff4351",
        "light-gray": "#F2F2F2",
        "accent-red": "#FF4452",
        "accent-green": "#31A24C",
      },
      width: {
        large: "607px",
      },
      maxWidth: {
        210: "210px",
      },
    },
  },
  plugins: [],
};
