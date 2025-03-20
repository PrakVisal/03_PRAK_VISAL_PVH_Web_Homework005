import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function FloatingImageCard({ data }) {
  return (
    <div className="mb-12 ml-10 mt-32 relative top-10">
      <div className="flex bg-gray-100 rounded-3xl shadow-lg items-center max-w-xl mt-15 px-10 py-8">
        {/* Image */}
        <div className="flex flex-col h-20 w-1/2 -top-52 items-center relative">
          <img
            src={data.image}
            alt="How Do You Live?"
            // width={210} // Adjust width as needed
            // height={220} // Adjust height as needed
            className="h-72 rounded-3xl w-auto shdow-lg"
          />

          <Link href={`/book-categories/${data.id}`}>
            <Button className="bg-[#BFD7EA] rounded-3xl text-[#0B3954] text-md duration-500 font-semibold hover:-translate-y-1 hover:bg-[#087E8B] hover:text-white mt-4 px-7 py-6 transition">
              READ FULL ARTICLE
            </Button>
          </Link>
        </div>

        {/* Text Content */}
        <div className="w-2/3 pl-12">
          <h2 className="text-xl font-bold line-clamp-1">{data.book_title}</h2>
          <p className="text-gray-600 text-md line-clamp-6">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
