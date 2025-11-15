import { createContext, useContext, useEffect, useState } from "react";
import { THEME } from "../../constants";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  updateTheme: (t: Theme) => void;
  switchToOppositeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(THEME) as Theme) || "dark";
  });

  // Apply theme classes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.classList.add(appliedTheme);
  }, [theme]);

  // Listen to system changes (only once!)
  useEffect(() => {
    if (theme === "system") {
      const listener = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? "dark" : "light";
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
      };
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      mql.addEventListener("change", listener);
      return () => mql.removeEventListener("change", listener);
    }
  }, [theme]);

  const updateTheme = (newTheme: Theme) => {
    localStorage.setItem(THEME, newTheme);
    setTheme(newTheme);
  };

  const switchToOppositeTheme = () => {
    const opposite =
      theme === "light"
        ? "dark"
        : theme === "dark"
          ? "light"
          : window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "light"
            : "dark";
    updateTheme(opposite);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, updateTheme, switchToOppositeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to consume
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider");
  return ctx;
};
