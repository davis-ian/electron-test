/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Default theme
        primary: {
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        background: {
          light: "var(--background-light)",
          dark: "var(--background-dark)",
        },
        text: {
          light: "var(--text-light)",
          dark: "var(--text-dark)",
        },
      },
    },
  },
  plugins: [],
};
