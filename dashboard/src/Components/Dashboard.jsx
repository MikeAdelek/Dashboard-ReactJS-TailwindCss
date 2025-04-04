import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { fetchNews } from "../data/NewsAPI";
import { activeEvents, statsData } from "../data/table";

const registrationData = [
  { month: "Jan", registrations: 220 },
  { month: "Feb", registrations: 370 },
  { month: "Mar", registrations: 280 },
  { month: "Apr", registrations: 435 },
  { month: "May", registrations: 350 },
  { month: "Jun", registrations: 975 }
];

const Dashboard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const articles = await fetchNews();
      setNews(articles.slice(0, 4));
    };
    loadNews();
  }, []);

  return (
    <main className="flex-1 p-6 md:pl-4 lg:pl-6 bg-gray-50 dark:bg-dark-50 min-h-screen">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Dashboard Overview
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6 transform transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </p>
                  <span
                    className={`text-xs ${
                      stat.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <stat.icon className="text-primary-500 opacity-70" size={40} />
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Events Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Registration Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Monthly Registrations
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={registrationData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--tw-bg-opacity)"
                />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#333",
                    color: "#fff"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="registrations"
                  stroke="#8884d8"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* News Section */}
          <div className="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Latest News
            </h2>
            {news.map((article, index) => (
              <div
                key={index}
                className="border-b last:border-b-0 py-3 dark:border-gray-700"
              >
                <h3 className="text-sm font-medium text-gray-800 dark:text-white line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Events */}
        <div className="bg-white dark:bg-dark-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Active Events
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="py-3 px-4">Event Name</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Attendees</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {activeEvents.map((event) => (
                  <tr
                    key={event.id}
                    className="border-b last:border-b-0 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-200"
                  >
                    <td className="py-3 px-4 font-medium">{event.title}</td>
                    <td className="py-3 px-4">{event.date}</td>
                    <td className="py-3 px-4">{event.attendees}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          event.status === "Upcoming"
                            ? "bg-blue-100 text-blue-800"
                            : event.status === "Open"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
