/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080d41",
        secondary: "#1e94c2",
        "secondary-dark": "#24579f",
        third: "#2d88ff",
        "secondary-bg": "#f1f4f9",
      },
    },
    borderRadius: {
      fifty: "50%",
    },
  },
  plugins: [],
};
