/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#B88E2F",
          light: "#000000",
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#F9F1E7",
          light: "#FFFFFF",
          dark: "#FFFFFF",
        },
        tertiary: {
          DEFAULT: "#9F9F9F",
          light: "#000000",
          dark: "#000000",
        },
        quaternary: {
          DEFAULT: "#FFFFFF",
          light: "#FFFFFF",
          dark: "#FFFFFF",
        },
        quinary: {
          DEFAULT: "#000000",
          light: "#000000",
          dark: "#000000",
        },
      },
    },
    
  },
  plugins: [],
};
