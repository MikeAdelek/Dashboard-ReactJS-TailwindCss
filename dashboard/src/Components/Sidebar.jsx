import React, { useState } from "react";
import { HiOutlineUserCircle, HiMenuAlt2, HiX } from "react-icons/hi";
import { MoonIcon, SunIcon } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import { sidebarItems } from "../constants/navigation";
import EventCard from "./EventCard";
import { useDarkMode } from "../Components/DarkModeContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [collapse, setCollapse] = useState(true);
  const [showEventCard, setShowEventCard] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleEdit = () => {
    console.log("Edit event");
  };

  const handleDelete = () => console.log("Delete event");

  const handleComplete = () => console.log("Mark as completed");

  const handleItemClick = (key) => {
    if (key === "Event") {
      setShowEventCard(!showEventCard);
    } else if (key === "Collapse") {
      setCollapse(!collapse);
    }
  };

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

        <div
          className={`hover:bg-[#484554]
            flex items-center ${
              collapse ? "gap-2 px-8" : "justify-center px-4"
            }  py-4
            ${darkMode ? "text-gray-300" : "text-gray-700"}
            `}
        >
          <HiOutlineUserCircle
            size={24}
            className={`transition-transform duration-300 ${
              !collapse ? "transform scale-110" : ""
            }`}
          />
          <div className={`${!collapse && "hidden"} overflow-hidden`}>
            <p className="dark:text-white">Rudra Devi</p>
            <p className="text-xs text-gray-500 dark:text-white truncate">
              Rudra.devi@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* {collapse} */}

      {/* Event Card */}
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
