import { ref, watch } from "vue";

type ColorTheme = "blue" | "green" | "purple";
type Mode = "light" | "dark";

interface ThemeColors {
  primary: { light: string; dark: string };
  secondary: { light: string; dark: string };
  background: { light: string; dark: string };
  text: { light: string; dark: string };
}

const themes: Record<ColorTheme, ThemeColors> = {
  blue: {
    primary: { light: "#3b82f6", dark: "#60a5fa" },
    secondary: { light: "#6366f1", dark: "#818cf8" },
    background: { light: "#ffffff", dark: "#1f2937" },
    text: { light: "#111827", dark: "#f9fafb" },
  },
  green: {
    primary: { light: "#10b981", dark: "#34d399" },
    secondary: { light: "#059669", dark: "#6ee7b7" },
    background: { light: "#ffffff", dark: "#1f2937" },
    text: { light: "#111827", dark: "#f9fafb" },
  },
  purple: {
    primary: { light: "#8b5cf6", dark: "#a78bfa" },
    secondary: { light: "#7c3aed", dark: "#c4b5fd" },
    background: { light: "#ffffff", dark: "#1f2937" },
    text: { light: "#111827", dark: "#f9fafb" },
  },
};

export function useTheme() {
  const mode = ref<Mode>(
    (localStorage.getItem("mode") as Mode) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const colorTheme = ref<ColorTheme>(
    (localStorage.getItem("colorTheme") as ColorTheme) || "blue"
  );

  const applyTheme = () => {
    // Apply dark mode
    if (mode.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Apply color theme
    const theme = themes[colorTheme.value];
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}-light`, value.light);
      root.style.setProperty(`--${key}-dark`, value.dark);
    });

    // Save preferences
    localStorage.setItem("mode", mode.value);
    localStorage.setItem("colorTheme", colorTheme.value);
  };

  watch(
    [mode, colorTheme],
    () => {
      applyTheme();
    },
    { immediate: true }
  );

  const toggleMode = () => {
    mode.value = mode.value === "light" ? "dark" : "light";
  };

  const setColorTheme = (theme: ColorTheme) => {
    colorTheme.value = theme;
  };

  return {
    mode,
    colorTheme,
    toggleMode,
    setColorTheme,
    availableThemes: Object.keys(themes) as ColorTheme[],
  };
}
