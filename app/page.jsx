import Image from "next/image";
import styles from "./page.module.css";
import BookCard from "@/components/cardThumbnail";
import Link from "next/link";
import CardThumbnail from "@/components/cardThumbnail";
import { Button } from "@heroui/react";
import DashboardLayout from "./(dashboard)/layout";
import DashboardSidebar from "@/components/dashboard-sidebar";

export default function Home() {
  return (
    <>
    <div className="flex h-screen">
  {/* Sidebar */}
  <DashboardSidebar/>
  {/* Main Content */}
  <main className="flex-1 p-6 bg-gray-100">
    {/*Search-bar*/}
    <div class="relative w-full transition-all">
    <input
      type="text"
      placeholder="Search..."
      id="searchInput"
      class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full outline-none transition-all border-gray-300"
    />
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
  {/*content*/}
    <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
      <Button className="text-[#087E8B] bg-gray-100 h-10 w-28 rounded-lg font-semibold">
       Homepage
      </Button>
      <br/>
      <br/>
      <hr className="" />
      <div className="flex items-start justify-center">
      <Link href="">
      <CardThumbnail path={`image1.png`} title={`Book`}/>
      </Link>
      <CardThumbnail path={`image2.png`} title={`Cartoon`}/>
      </div>
      
    </div>
  </main>
  
    </div>
    </>   
  );
}
