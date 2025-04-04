import React from "react";
import { useTheme } from "../App";
import Avatar from '../assets/dp.jpg'
import { IoMdMoon, IoMdNotificationsOutline } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <nav className="bg-white dark:bg-dark-100 shadow-sm">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-200"
            >
              {darkMode ? (
                <IoSunnyOutline className="text-yellow-500" size={24} />
              ) : (
                <IoMdMoon className="text-gray-600" size={24} />
              )}
            </button>
            <div className="relative">
              <IoMdNotificationsOutline
                className="text-gray-600 dark:text-white"
                size={24}
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </div>
            <div className="flex items-center">
              <img
                src={Avatar}
                alt="Profile"
                className="rounded-full w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
