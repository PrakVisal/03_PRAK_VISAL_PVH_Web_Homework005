import DashboardSidebar from "@/components/dashboard-sidebar";
import DropdownButton from "@/components/dropdown";
import SearchField from "@/components/searchField";

import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-12 bg-red-100 h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="col-span-2">
          <DashboardSidebar />
        </div>
        {/*Main Content*/}
        <div className="col-span-10 max-h-fit overflow-auto">
          {/*Search-bar*/}
          <SearchField />
          {/* <div className="w-[93%] mx-12 my-10 relative transition-all">
            <input
              type="text"
              placeholder="Search..."
              id="searchInput"
              className="bg-white border border-gray-300 border-none h-12 rounded-full text-gray-700 w-full outline-none pl-10 pr-4 py-2 transition-all"
            />
            <div className="flex absolute inset-y-0 items-center left-0 pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-gray-400 w-5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div> */}
          {children}
        </div>
      </div>
    </>
  );
}
