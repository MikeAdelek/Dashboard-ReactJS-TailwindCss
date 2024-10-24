import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const DashboardStatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <BoxWrapper>
        <div className="w-full pl-6">
          <div className="flex gap-2 items-center text-[#64748B]">
            <span className="text-[#64748B] dark:text-white font-bold">
              Total Event
            </span>
            <IoMdInformationCircleOutline className="dark:text-white" />
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-xl text-[#334155] dark:text-white">
              100,000
            </strong>
            <span className="text-[#10B981] dark:text-[#10B981] font-bold">
              {" "}
              ↗ +5.0%
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="w-full pl-6">
          <div className="flex gap-2 items-center text-[#64748B]">
            <span className="text-[#64748B] dark:text-white font-bold">
              Active Speakers
            </span>
            <IoMdInformationCircleOutline className="dark:text-white" />
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-xl text-[#334155] dark:text-white">
              25
            </strong>
            <span className="text-[#F43F5E] dark:text-[#F43F53] font-bold">
              {" "}
              ↘ +5.0%
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="w-full pl-6">
          <div className="flex gap-2 items-center text-[#64748B]">
            <span className="text-[#64748B] dark:text-white font-bold">
              Total Registrations
            </span>
            <IoMdInformationCircleOutline className="dark:text-white" />
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-xl text-[#334155] dark:text-white">
              300
            </strong>
            <span className="text-[#10B981] dark:text-[#10B981] font-bold">
              {" "}
              ↗ +5.0%
            </span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="w-full pl-6">
          <div className="flex gap-2 items-center text-[#64748B]">
            <span className="text-[#64748B] dark:text-white font-bold">
              Total Revenue
            </span>
            <IoMdInformationCircleOutline className="dark:text-white" />
          </div>
          <div className="flex items-center gap-2">
            <strong className="text-xl text-[#334155] dark:text-white">
              $ 500,000
            </strong>
            <span className="text-[#10B981] dark:text-[#10B981] font-bold">
              {" "}
              ↗ +5.0%
            </span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStatsGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white dark:bg-[#6A6676] transition-colors rounded-sm p-4 border border-gray-200 dark:border-none flex items-center">
      {children}
    </div>
  );
}
