"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBarLink({ item }) {
  const pathName = usePathname();
  return (
    <>
      <Link
        href={item.href}
        className={`ml-4 mt-1 gap-x-3 group flex items-center p-3 text-base font-medium rounded-xl text-gray-600 ${
          pathName === item.href ? "bg-blue-50" : "bg-none"
        } hover:bg-gray-100 hover:text-gray-700 hover:font-bold`}
      >
        {item.icon}
        {item.label}
      </Link>
    </>
  );
}
