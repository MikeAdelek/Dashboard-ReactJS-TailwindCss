import React, { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { events } from "../data/table";

const EventManagement = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filterOptions = ["All", "Upcoming", "Open", "Planning", "Completed"];

  const filteredEvents = events.filter(
    (event) =>
      (filter === "All" || event.status === filter) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1 p-6 md:pl-4 lg:pl-6 bg-gray-50 dark:bg-dark-50 min-h-screen">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-0">
            Event Management
          </h1>
          <button className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
            <Plus className="mr-2" size={20} />
            Create Event
          </button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-3 py-2 rounded-lg text-sm transition ${
                  filter === option
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 dark:bg-dark-200 text-gray-700 dark:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border dark:bg-dark-200 dark:border-gray-700 dark:text-white"
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
        </div>

        {/* Events Table */}
        <div className="bg-white dark:bg-dark-100 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-300">
                <th className="p-4 text-left">Event Title</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Speaker</th>
                <th className="p-4 text-left">Location</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Registrations</th>
                <th className="p-4 text-left">Revenue</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => (
                <tr
                  key={event.id}
                  className="border-b last:border-b-0 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-200"
                >
                  <td className="p-4 font-medium">{event.title}</td>
                  <td className="p-4">
                    {new Date(event.date).toLocaleDateString()}
                  </td>
                  <td className="p-4">{event.speaker}</td>
                  <td className="p-4">{event.location}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        event.status === "Upcoming"
                          ? "bg-blue-100 text-blue-800"
                          : event.status === "Open"
                          ? "bg-green-100 text-green-800"
                          : event.status === "Planning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.status}
                    </span>
                  </td>
                  <td className="p-4">{event.registrations}</td>
                  <td className="p-4">{event.revenue}</td>
                  <td className="p-4 flex justify-center space-x-2">
                    <button
                      className="text-blue-500 hover:bg-blue-100 p-2 rounded-full"
                      title="Edit Event"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-500 hover:bg-red-100 p-2 rounded-full"
                      title="Delete Event"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default EventManagement;
