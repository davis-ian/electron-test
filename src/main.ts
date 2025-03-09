import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Initialize dark mode
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const isDarkMode =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && darkModeMediaQuery.matches);

// Apply initial theme
if (isDarkMode) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Create and mount Vue app
createApp(App).mount("#app");
