import CartoonCard from "@/components/cartoonCard";
import DropdownButton from "@/components/dropDown";
import { AllCartoonService } from "@/service/book_service";
import {
  AllCartoonCategoryService,
  FilterCartoonById,
  SearchCartoonByTitle,
} from "@/service/cartoon_service";
import { AllCategoriesService } from "@/service/category_service";
import { Button } from "@heroui/react";
import React from "react";

export default async function Cartoon({ searchParams }) {
  const { CatId } = await searchParams;
  const { search } = await searchParams;
  const cartoon = await AllCartoonService();
  const allCartoonCategories = await AllCartoonCategoryService();
  const filterCartoonById = await FilterCartoonById(CatId);
  const searchCartoon = await SearchCartoonByTitle(search);
  const filterData = CatId ? filterCartoonById : cartoon;
  const filterTitle = CatId
    ? allCartoonCategories[CatId - 1]?.cartoon_genre
    : "Old School Cartoons";

  let mainData;
  if (search) {
    mainData = searchCartoon;
  } else if (CatId) {
    mainData = filterData;
  } else {
    mainData = cartoon;
  }
  return (
    <>
      {/*Header*/}
      <div className="bg-white p-6 rounded-3xl mt-4 mx-12">
        <div className="flex justify-between">
          <Button className="bg-gray-100 h-10 rounded-lg text-[#087E8B] w-auto font-bold ml-2">
            {filterTitle}
          </Button>
          {/* Button for filtering by category */}
          <DropdownButton bookCategories={allCartoonCategories} />
        </div>
        <br />
        <br />
        <hr />
        <div className="grid grid-cols-3">
          {mainData?.map((data) => (
            <CartoonCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
