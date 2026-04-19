import { createContext, useState, useContext } from "react";

//1. create Theme Context
const ThemeContext = createContext();

//2. Theme Provider Component (This is like a container, you can create states, methods..etc)
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  const themeTextColors = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const themeBgColors = theme === "dark" ? "bg-gray-900" : "bg-white";

  const value = {
    theme,
    toggleTheme,
    themeTextColors,
    themeBgColors,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

//4. Custom hook to use theme
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

export function ThemeToggleButton() {
  const { toggleTheme, isDark } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isDark ? "bg-amber-700" : "bg-gray-300"}`}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${isDark ? "transform translate-x-8" : ""}`}
      >
        {isDark ? "🌙" : "☀️"}
      </div>
    </button>
  );
}

export function ThemeToggler() {
  const { themeTextColors, themeBgColors, isDark } = useTheme();

  return (
    <section
      className={`p-8 shadow-xl rounded-2xl ${themeBgColors}  ${isDark ? "border-gray-500 border-4 shadow-2xl" : ""}`}
    >
      <h2
        className={`text-3xl font-bold  mb-3 ${themeTextColors}`}
      >
        ThemeToggler
      </h2>
      <ThemeToggleButton />
    </section>
  );
}
