import TopNavBar from "@/components/topNavbar";
import { ArrowIcon, HomeIcon, WritingIcon } from "@/constant/menu";
import { IdBookService } from "@/service/book_controller";
import Image from "next/image";
import Link from "next/link";
export default async function BookDetailPage({ params }) {
  const paramId = (await params).bookId;

  console.log("Id from param : ", paramId);

  const bookById = await IdBookService(paramId);

  return (
    <div className="bg-slate-100 h-screen p-10 w-full overflow-auto relative">
      <div className="h-[15%] m-auto w-[80%]">
        <ul>
          <li>
            <TopNavBar titleBook={bookById.book_title} />
          </li>
        </ul>
      </div>
      <div className="bg-white h-auto m-auto rounded-[30px] w-[80%]">
        <div className="absolute right-[300px] top-[50px]">
          <img
            src={bookById.image}
            className="h-96 rounded-[40px] w-auto"
            alt="Book Image"
          />
        </div>
        <div className="p-20">
          <h1 className="text-[30px] font-bold pt-44">{bookById.book_title}</h1>
          <p className="text-[27px] py-4">
            By{" "}
            <span className="text-[#087E8B] inline-block">
              {bookById.book_author}
            </span>
          </p>
          <p className="text-[20px]">{bookById.description}</p>
        </div>
      </div>
    </div>
  );
}
