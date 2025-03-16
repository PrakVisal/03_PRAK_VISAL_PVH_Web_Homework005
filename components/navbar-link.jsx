"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBarLink({item}) {
    const pathName = usePathname()
    console.log("Pathname",pathName)
  return (
    <>
    <Link
        href={item.href}
        className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 ${pathName === item.href ? "bg-blue-300" : "bg-gray-400"} hover:bg-gray-50 hover:text-gray-900`}
      >
        {item.icon}
        {item.label}
      </Link>
    </>
  )
}
