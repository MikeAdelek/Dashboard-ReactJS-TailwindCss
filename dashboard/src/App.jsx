import React, { createContext, useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import NewsPage from "./pages/NewsPage";
import Speakers from "./pages/Speakers";
import Gallery from "./pages/Gallery";
import EventManagement from "./pages/EventManagement";
import "./index.css";

// Theme Context
export const ThemeContext = createContext({
  darkMode: false,
  taggleDarkMode: () => {}
});

export const useTheme = () => useContext(ThemeContext);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Router>
        <div className="flex h-screen bg-gray-100 dark:bg-dark-50">
          <Sidebar />
          <div className="flex-1 overflow-y-auto">
            <Header />
            <main className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/events" element={<EventManagement />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
