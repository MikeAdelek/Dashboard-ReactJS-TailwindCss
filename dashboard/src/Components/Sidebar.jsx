import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { MoonIcon, SunIcon } from "lucide-react";
import { HiOutlineUserCircle, HiMenuAlt2, HiX } from "react-icons/hi";

import EventCard from "./EventCard";
import { sidebarItems } from "../constants/navigation";
import { useDarkMode } from "../Components/DarkModeContext";

const Sidebar = () => {
  // State to control whether the sidebar is open (for mobile views)
  const [isOpen, setIsOpen] = useState(true);

  // State to control whether the sidebar is collapsed (minimized width)
  const [collapse, setCollapse] = useState(true);

  // State to control the visibility of the EventCard component
  const [showEventCard, setShowEventCard] = useState(false);

  // Dark mode state from custom dark mode context
  const { darkMode, setDarkMode } = useDarkMode();

  // Toggle sidebar visibility (for mobile)
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Toggle between dark mode and light mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Handle event edit action
  const handleEdit = () => {
    console.log("Edit event");
  };

  // Handle event delete action
  const handleDelete = () => console.log("Delete event");

  // Handle event completion action
  const handleComplete = () => console.log("Mark as completed");

  // Handle sidebar item clicks
  const handleItemClick = (key) => {
    if (key === "Event") {
      setShowEventCard(!showEventCard); // Toggle event card visibility
    } else if (key === "Collapse") {
      setCollapse(!collapse); // Toggle sidebar collapse
    }
  };

  // Dynamic classes for the sidebar links (adjusts based on dark mode)
  const linkClasses = `flex items-center text-md gap-2 px-8 py-4 rounded-sm transition-colors
    ${
      darkMode
        ? "text-white hover:bg-[#484554] active:bg-purple-700"
        : "text-gray-700 hover:bg-gray-100 active:bg-purple-100"
    }`;

  return (
    <div className={`${darkMode ? "dark bg-[#484554]" : "bg-white"} `}>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-[#6A6676] dark:bg-white"
      >
        {isOpen ? <HiX /> : <HiMenuAlt2 />}
      </button>

      {/* Sidebar container */}
      <div
        className={`
        fixed inset-y-0 left-0 z-10 ${
          collapse ? "w-60" : "w-20"
        } shadow-md transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-auto
        ${darkMode ? "bg-[#6A6676]" : "bg-white"}
      `}
      >
        {/* Logo and dark mode toggle button */}
        <div className="flex justify-between items-center p-4 top-10 sm:justify-center relative">
          <span
            className={`px-8 text-lg ${
              darkMode ? "text-white" : "text-gray-800"
            } ${!collapse && "hidden"}`}
          >
            Full Logo
          </span>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-transform duration-300 ${
              !collapse ? "transform scale-110" : ""
            }`}
          >
            {/* Dark mode toggle icon (sun for light mode, moon for dark mode) */}
            {darkMode ? (
              <SunIcon
                className={`${
                  collapse ? "h-3 w-3" : "h-3 w-3"
                } text-yellow-400`}
              />
            ) : (
              <MoonIcon
                className={`${collapse ? "h-3 w-3" : "h-3 w-3"} text-gray-700`}
              />
            )}
          </button>
        </div>

        {/* Sidebar items */}
        <div className="flex-1 py-8 flex flex-col">
          {sidebarItems.map((item) => (
            <div
              key={item.key}
              className={`${linkClasses} ${
                !collapse && "justify-center px-4"
              } cursor-pointer`}
              onClick={() => handleItemClick(item.key)}
            >
              {item.icon}
              <span
                className={`${
                  !collapse ? "hidden" : "block"
                } transition-opacity duration-300 `}
              >
                {item.label}
              </span>
              {item.alert && (
                <span className="bg-[#F43F5E] text-white rounded-full px-2 flex items-center">
                  {item.alert}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* User profile section */}
        <div
          className={`hover:bg-[#484554]
            flex items-center ${
              collapse ? "gap-2 px-8" : "justify-center px-4"
            }  py-4
            ${darkMode ? "text-gray-300" : "text-gray-700"}
            `}
        >
          {/* User profile icon */}
          <HiOutlineUserCircle
            size={24}
            className={`transition-transform duration-300 ${
              !collapse ? "transform scale-110" : ""
            }`}
          />
          {/* User details */}
          <div className={`${!collapse && "hidden"} overflow-hidden`}>
            <p className="dark:text-white">Rudra Devi</p>
            <p className="text-xs text-gray-500 dark:text-white truncate">
              Rudra.devi@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Event Card (visible when showEventCard is true) */}
      {showEventCard && (
        <div
          className={`fixed left-64 top-0 z-50 lg:left-64 transition-all duration-300 ease-in-out ${
            isOpen && "lg:left-16"
          }`}
        >
          <div className="relative">
            <button
              onClick={() => setShowEventCard(false)}
              className={`absolute top-6 right-6 w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                darkMode
                  ? "bg-white text-[#6A6676] hover:bg-gray-600 dark:hover:text-white"
                  : "bg-gray-800 text-white  hover:bg-gray-700"
              }`}
            >
              <IoMdClose />
            </button>

            {/* EventCard component */}
            <EventCard
              attendees={300}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onComplete={handleComplete}
              darkMode={darkMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
