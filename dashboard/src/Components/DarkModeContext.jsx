import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

// DarkModeProvider component that wraps the application
// Manages dark mode state and provides it to all child components

export const DarkModeProvider = ({ children }) => {
  // Initialize dark mode state as false (light mode by default)
  // setDarkMode function will be used to toggle between light and dark modes

  const [darkMode, setDarkMode] = useState(false);

  return (
    // Provide the dark mode state and setter function to all children
    // This allows any child component to access and modify the dark mode state

    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen dark:bg-gray-900 transition-colors">
          {children}
        </div>
      </div>
    </DarkModeContext.Provider>
  );
};

// Custom hook to easily access dark mode context
// Usage: const { darkMode, setDarkMode } = useDarkMode();
// This prevents the need to import useContext and DarkModeContext in every component

export const useDarkMode = () => useContext(DarkModeContext);
