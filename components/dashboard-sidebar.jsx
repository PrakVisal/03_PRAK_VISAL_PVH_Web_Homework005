import React from "react";
import NavBarLink from "./navbar-link";
import { MENU_LINK } from "@/constant/menu";

export default function DashboardSidebar() {


  return (
    <>
      <aside className="w-full bg-white shadow-md sticky max-h-fit">
        <div className="p-4 border-b">
          <div className="flex items-center flex-col">
            <img src="asset/user_pf.png" alt="" className="h-24" />
            <span className="ml-2 mt-2 text-xl font-semibold text-gray-800">
              Prak Visal
            </span>
            <span className="ml-2 mt-2 text-md font-medium text-[#087E8B]">
              visalprak2015@gmail.com
            </span>
          </div>
        </div>
        <nav className="mt-5 px-2 h-screen">
          {MENU_LINK.map((item, index) => (
            <NavBarLink key={index} item={item} />
          ))}
        </nav>
      </aside>
    </>
  );
}
