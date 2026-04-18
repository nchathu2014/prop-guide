import { createContext, useState, useContext } from "react";

//1. create Theme Context
const ThemeContext = createContext();

//2. Theme Provider Component (This is like a container, you can create states, methods..etc)
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  const value = {
    theme,
    toggleTheme,
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

function ThemeToggleButton() {
  const { theme, toggleTheme, isDark } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isDark ? "bg-blue-600" : "bg-gray-300"}`}
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
   const { isDark } = useTheme();

  return (
    <section className={`p-8 shadow-xl rounded-2xl ${isDark?'bg-gray-600':'bg-white'}`}>
      <h2 className={`text-3xl font-bold  mb-3 ${isDark?'text-white':'text-gray-800'}`}>ThemeToggler</h2>
      <ThemeToggleButton />
    </section>
  );
}
