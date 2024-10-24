import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

import { mobileNav } from "../constants/navigation"; // Mobile navigation links
import { Table_Rows, tableHead } from "../constants/table"; //Table data and headers

const EventHistory = () => {
  // State variables for active tab, dropdown, pagination, and items per page
  const [activeTab, setActiveTab] = useState("Home");
  const [dropDown, setDropDown] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Function to toggle the visibility of dropdown rows
  const toggleRow = (index) => {
    const newDropDown = new Set(dropDown);
    if (newDropDown.has(index)) {
      newDropDown.delete(index);
    } else {
      newDropDown.add(index);
    }
    setDropDown(newDropDown);
  };

  return (
    <div className="flex-1 px-2 sm:px-4 pt-8 pb-4 rounded-sm border border-gray-200 dark:border-none">
      <strong className="text-lg sm:text-xl">Events History</strong>
      <div className="mt-10 space-y-4 lg:space-x-0">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col flex-grow sm:flex-row gap-4">
            {/* Search bar */}
            <div className="relative w-full sm:max-w-md">
              <input
                type="search"
                placeholder="Search..."
                className="bg-white dark:bg-[#6A6676] transition-colors  dark:text-white w-full pl-10 pr-4 py-1.5 border dark:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-[#8576FF]"
              />
              <CiSearch className="absolute left-3 top-0 transform translate-y-1/2 h-5 w-5 text-gray-400 dark:text-white" />
            </div>

            {/* Filter dropdowns for Date, Status, Name */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <select className="bg-white dark:bg-[#6A6676] transition-colors dark:text-white w-full sm:w-auto text-sm border dark:border-none rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-[#8576FF]">
                <option value="Date">Date</option>
              </select>
              <select className="bg-white dark:bg-[#6A6676] transition-colors dark:text-white w-full sm:w-auto text-sm border dark:border-none rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-[#8576FF]">
                <option value="Status">Status</option>
              </select>
              <select className="bg-white dark:bg-[#6A6676] transition-colors dark:text-white w-full sm:w-auto text-sm border dark:border-none rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-[#8576FF]">
                <option value="Name">Name</option>
              </select>
              <span className="dark:text-white text-sm text-gray-600 font-bold sm:order-none">
                Displaying {Table_Rows.length} results
              </span>
            </div>

            {/* Sort and action buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:ml-auto">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <label
                    htmlFor="Sort"
                    className="dark:text-white text-sm text-gray-600 whitespace-nowrap"
                  >
                    Sort:
                  </label>
                  <select
                    id="Sort"
                    className="bg-white dark:bg-[#6A6676] transition-colors dark:text-white flex-grow text-sm sm:flex-grow-0 border dark:border-none rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-[#8576FF]"
                  >
                    <option value="Sort text-sm">Most Recent</option>
                  </select>

                  {/* Additional buttons (menu and export) */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-[#8576FF]">
                      <CiMenuKebab className="h-5 w-5 dark:text-white" />
                    </button>
                    <button className="bg-white dark:bg-[#6A6676] transition-colors flex items-center gap-2 px-3 py-2 border dark:border-none rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-[#8576FF]">
                      <CiImport className="h-5 w-5" />
                      <span className="dark:text-white whitespace-nowrap text-sm">
                        Export
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table view for larger screens */}
        <div className="">
          <div className="hidden sm:block mt-6 overflow-x-auto">
            {/* <div className="inline-block min-w-full align-middle"></div> */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHead.map((head) => (
                    <th
                      key={head}
                      className="bg-white dark:bg-[#6A6676] transition-colors dark:text-white px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="bg-white dark:bg-[#484554] divide-y divide-gray-200">
                {Table_Rows.map(({ Event, Date, Speaker, Status }, index) => (
                  <tr
                    key={index}
                    className="bg-white dark:bg-[#484554] hover:bg-gray-50 dark:hover:bg-[#6A6676]"
                  >
                    <td className="dark:text-white px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {Event}
                    </td>
                    <td className="dark:text-white px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {Date}
                    </td>
                    <td className="dark:text-white px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {Speaker}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-3 py-1 text-sm rounded-full ${
                          Status === "• Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }
                            `}
                      >
                        {Status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 py-3 bg-white dark:bg-[#484554] border-t border-gray-200 border-none">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-[#6A6676] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 1}
                >
                  <MdArrowLeft className="h-5 w-5 text-gray-500 dark:text-white" />
                </button>
                {/* Pagination buttons */}
                <div className="flex space-x-1">
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`dark:text-white px-2.5 py-1 rounded-full text-sm font-medium ${
                        currentPage === page
                          ? "bg-[#8576FF] text-white"
                          : "text-gray-500 hover:bg-gray-100 dark:hover:bg-[#6A6676]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, 3))
                  }
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-[#6A6676] disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 3}
                >
                  <MdArrowRight className="h-5 w-5 text-gray-500 dark:text-white" />
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <label
                  htmlFor="Sort"
                  className="dark:text-white text-base text-gray-600 whitespace-nowrap"
                >
                  Show:
                </label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="bg-white dark:bg-[#6A6676] block w-full rounded-md dark:text-white border-gray-300 dark:border-none py-1.5 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value={10}>10 Row</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom Navigation for Mobile */}
          <div className="sm:hidden">
            <div className="space-y-4 pt-5">
              {Table_Rows.map(({ Event, Date, Speaker, Status }, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#484554] transition-colors rounded-lg border border-gray-200 dark:border-none"
                >
                  <button
                    onClick={() => toggleRow(index)}
                    className="w-full p-4 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="dark:text-white text-sm font-medium text-gray-900">
                          {Event}
                        </span>
                        <span
                          className={`ml-2 px-3 py-1 text-xs rounded-full ${
                            Status === "• Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {Status}
                        </span>
                      </div>
                    </div>
                    {dropDown.has(index) ? (
                      <IoIosArrowDropup className="dark:text-white ml-2 h-5 w-5 text-gray-400" />
                    ) : (
                      <IoIosArrowDropdown className="dark:text-white ml-2 h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {dropDown.has(index) && (
                    <div className="px-4 pb-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="dark:text-white text-gray-900">
                          {Speaker}
                        </span>
                        <span className="dark:text-white text-gray-900">
                          {Date}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="bg-white dark:bg-[#484554] transition-colors flex sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-200 border-none">
                <div className="flex items-center justify-center sm:justify-start space-x-2 px-4 pb-12">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className="dark:text-white p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentPage === 1}
                  >
                    <MdArrowLeft className="dark:text-white h-5 w-5 text-gray-500" />
                  </button>

                  <div className="flex space-x-1">
                    {[1, 2, 3].map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`dark:text-white px-2.5 py-1 rounded-full text-sm font-medium ${
                          currentPage === page
                            ? "bg-[#8576FF] text-white"
                            : "text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, 3))
                    }
                    className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentPage === 3}
                  >
                    <MdArrowRight className="dark:text-white h-5 w-5 text-gray-500" />
                  </button>
                </div>

                <div className="flex items-center space-x-2 pb-12">
                  <label
                    htmlFor="Sort"
                    className="dark:text-white text-base text-gray-600 whitespace-nowrap"
                  >
                    Show:
                  </label>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="bg-white dark:bg-[#6A6676] dark:text-white block w-full rounded-md border-gray-300 dark:border-none py-1.5 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value={10}>10 Row</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
              <nav className="flex">
                {mobileNav.map((mobile) => (
                  <button
                    key={mobile.label}
                    className={`bg-white dark:bg-[#484554] dark:text-white flex-1 py-3 text-xs font-medium text-center whitespace-nowrap ${
                      activeTab === mobile.label
                        ? "text-[#8576FF] border-t border-[#8576FF]"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab(mobile.label)}
                  >
                    <div className="mb-1 flex justify-center items-center">
                      {mobile.icon}
                    </div>
                    <div className="text-xs">{mobile.label}</div>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHistory;
