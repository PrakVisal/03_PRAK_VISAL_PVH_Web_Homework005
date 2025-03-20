import DropdownButton from "@/components/dropDown";
import FloatingImageCard from "@/components/floatCard";

import getBookByCategoryIdService from "@/service/book_controller";
import categoryBookService, {
  AllBooksService,
} from "@/service/book_controller";
import { AllCategoriesService } from "@/service/category_controller";
import { Button } from "@heroui/react";
import React from "react";

export default async function Category({ searchParams }) {
  const { CatId } = await searchParams;
  console.log("dataBook:", CatId);
  const categoryData = await AllBooksService();
  const filterBooks = await getBookByCategoryIdService(CatId);
  const bookCategories = await AllCategoriesService();

  const data = searchParams ? filterBooks : categoryData;

  return (
    <>
      {/*Header*/}
      <div className="bg-white p-6 rounded-3xl mt-4 mx-12">
        <div className="flex justify-between">
          <Button className="bg-gray-100 h-10 rounded-lg text-[#087E8B] w-28 font-semibold ml-2">
            All Category
          </Button>
          {/* Button for filtering by category */}
          <DropdownButton bookCategories={bookCategories} />
        </div>
        <br />
        <br />
        <hr />
        <div className="grid grid-cols-2">
          {data.map((data) => (
            <FloatingImageCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
