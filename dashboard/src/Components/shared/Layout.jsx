import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { DarkModeProvider } from "../DarkModeContext";

export default function Layout() {
  return (
    <DarkModeProvider>
      <div className="bg-white dark:bg-[#484554] w-full h-full flex flex-row overflow-hidden">
        <Sidebar />
        <div className="p-2 flex-1">
          <Header />
          <div className="p-2 dark:text-gray-200">{<Outlet />}</div>
        </div>
      </div>
    </DarkModeProvider>
  );
}
