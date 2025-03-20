import CartoonCard from "@/components/cartoonCard";
import DropdownButton from "@/components/dropDown";
import { AllCartoonService } from "@/service/book_controller";
import {
  AllCartoonCategoryService,
  FilterCartoonById,
} from "@/service/cartoon_service";
import { AllCategoriesService } from "@/service/category_controller";
import { Button } from "@heroui/react";
import React from "react";

export default async function Cartoon({ searchParams }) {
  const { CatId } = await searchParams;
  console.log("data:", CatId);
  const cartoon = await AllCartoonService();
  const bookCategories = await AllCategoriesService();
  const allCartoonCategories = await AllCartoonCategoryService();
  const filterCartoonById = await FilterCartoonById(CatId);
  console.log(filterCartoonById);
  const filterData = CatId ? filterCartoonById : cartoon;
  return (
    <>
      {/*Header*/}
      <div className="bg-white p-6 rounded-3xl mt-4 mx-12">
        <div className="flex justify-between">
          <Button className="bg-gray-100 h-10 rounded-lg text-[#087E8B] w-28 font-bold ml-2">
            All Category
          </Button>
          {/* Button for filtering by category */}
          <DropdownButton bookCategories={allCartoonCategories} />
        </div>
        <br />
        <br />
        <hr />
        <div className="grid grid-cols-3">
          {filterData?.map((data) => (
            <CartoonCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
