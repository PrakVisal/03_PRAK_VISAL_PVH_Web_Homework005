import DashboardSidebar from "@/components/dashboard-sidebar";
import DropdownButton from "@/components/dropdown";

import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-12 h-screen bg-red-100 overflow-hidden">
        {/* Sidebar */}
        <div className="col-span-2">
          <DashboardSidebar />
        </div>
        {/*Main Content*/}
        <div className="col-span-10 max-h-fit overflow-auto">
          {/*Search-bar*/}
          <div className="relative w-[93%] transition-all my-10 mx-12">
            <input
              type="text"
              placeholder="Search..."
              id="searchInput"
              className="w-full h-12 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full outline-none border-none transition-all border-gray-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400 transition-all"
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
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
