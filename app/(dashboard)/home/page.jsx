import Image from "next/image";
import BookCard from "@/components/cardThumbnail";
import Link from "next/link";
import CardThumbnail from "@/components/cardThumbnail";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <>
      {/*Header*/}
      <div className="bg-white p-6 rounded-3xl mt-4 mx-12">
        <div className="flex justify-between">
          <Button className="bg-gray-100 h-10 rounded-lg text-[#087E8B] w-28 font-bold ml-2">
            All Category
          </Button>
        </div>
        <br />
        <br />
        <hr />
        {/* Main Content */}
        <main className="flex-1 h-screen p-6 rounded-large">
          <div className="flex justify-evenly items-start">
            <Link href="/category">
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
