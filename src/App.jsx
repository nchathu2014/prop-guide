import "./App.css";
import { BasicProps } from "./components/BasicProps";
import { ChildrenProps } from "./components/ChildrenProps";
import { ComplexProps } from "./components/ComplexProps";
import { RefProps } from "./components/RefProps";
import { ThemeToggler, ThemeProvider } from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "🐣" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  const onNavClick = (id) => {
    console.log(id);
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-50 transition-colors ${isDark ? "bg-gray-800" : "bg-white"} flex justify-center`}
    >
      <div>
        <div>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 rounded font-medium bg-blue-600 text-white mr-1 mt-1 hover:bg-amber-600 cursor-pointer`}
              onClick={() => onNavClick(section.id)}
            >
              <span>
                <span className={`mr-2`}>{section.icon}</span>
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${isDark ? "text-white" : "text-gray-800"}`}
        >
          <h1 className={`text-5xl font-bold mb-4`}>React Props Explained</h1>
          <p>A comprehensive guide to understand props in React</p>
          <div className={`text-white font-bold mt-5`}>
            Built with Bun + Vite + React + Tailwind CSS
          </div>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="children" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="complex" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="ref" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="theme" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

//3. Wrap the AppContent with the ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
