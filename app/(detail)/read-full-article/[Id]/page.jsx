import TopNavBar from "@/components/topNavbar";

import { IdBookService } from "@/service/book_service";
import { GetCartoonById } from "@/service/cartoon_service";
import { Eye } from "iconsax-react";

export default async function BookDetailPage({ params, searchParams }) {
  const paramId = (await params).Id;
  const type = (await searchParams)?.type;
  let data;

  if (type === "book") {
    data = await IdBookService(paramId);
  } else if (type === "cartoon") {
    data = await GetCartoonById(paramId);
  }

  const newYear = data.published_year?.split("-")[0] || "Unknown";

  return (
    <div className="bg-slate-100 h-screen p-10 w-full overflow-auto relative">
      <div className="h-[15%] m-auto w-[80%]">
        <ul>
          <li>
            <TopNavBar
              titleBook={data.book_title || data.ct_title}
              typeCategory={
                data.book_title ? `Book Category` : `Old School Cartoons`
              }
            />
          </li>
        </ul>
      </div>
      <div className="bg-white h-auto m-auto rounded-[30px] w-[80%]">
        <div className="absolute right-[300px] top-[50px]">
          <img
            src={data.image}
            className="h-96 rounded-[40px] w-auto"
            alt="Book Image"
          />
        </div>
        <div className="p-20">
          <h1 className="text-[30px] font-bold pt-44">
            {data.book_title || data.ct_title}
          </h1>
          <p className="text-[27px] py-4">
            By{" "}
            <span className="text-[#087E8B] inline-block">
              {data.book_author || data.ct_creator}
            </span>
          </p>

          {data.ct_title ? (
            <div className="flex items-center mb-4">
              <div className="flex gap-2 items-center">
                <Eye color="#718096" variant="Outline" size={25} />
                <p className="text-[#087e8b] font-bold">
                  {data.view_count} times
                </p>
                |
              </div>
              <p className="text-[#087e8b] font-bold pl-3">{newYear}</p>
            </div>
          ) : (
            ""
          )}

          <p className="text-[20px]">
            {data.description || data.ct_description}
          </p>
        </div>
      </div>
    </div>
  );
}
