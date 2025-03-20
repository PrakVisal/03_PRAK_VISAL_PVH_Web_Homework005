import Image from "next/image";

import BookCard from "@/components/cardThumbnail";
import Link from "next/link";
import CardThumbnail from "@/components/cardThumbnail";
import { Button } from "@heroui/react";
import DashboardLayout from "./layout";
import DashboardSidebar from "@/components/dashboard-sidebar";

export default function Home() {
  return (
    <>
      {/*Header*/}
      <div className="bg-white p-6 rounded-3xl mt-4 mx-12">
        <div className="flex justify-between">
          <Button className="bg-gray-100 h-10 rounded-lg text-[#087E8B] w-28 font-bold ml-2">
            Homepage
          </Button>
        </div>
        <br />
        <br />
        <hr />
        {/* Main Content */}
        <main className="flex-1 h-screen p-6 rounded-large">
          <div className="flex justify-evenly items-start">
            <Link href="/book-categories">
              <CardThumbnail path={`image1.png`} title={`Book`} />
            </Link>
            <Link href="/cartoon">
              <CardThumbnail path={`image2.png`} title={`Cartoon`} />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
