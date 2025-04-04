import React, { useState } from "react";
import { sidebarItems } from "../data/navigation";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Using Lucide icons for mobile menu toggle

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when a nav item is clicked (for mobile)
  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-dark-100 shadow-md rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Desktop and Mobile Versions */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-dark-100 shadow-md 
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-center h-20 border-b dark:border-gray-700 relative">
          <h2 className="text-2xl font-bold text-primary-600 dark:text-white">
            EventHub
          </h2>

          {/* Close button for mobile */}
          <button
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2"
            onClick={toggleSidebar}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <Link
              to={item.path}
              key={item.key}
              onClick={handleNavItemClick}
              className={`flex items-center px-6 py-3 transition-colors duration-200 
                ${
                  location.pathname === item.path
                    ? "bg-primary-100 dark:bg-dark-200 text-primary-600 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-200"
                }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
