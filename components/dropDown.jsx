"use client";

import { usePathname, useRouter } from "next/navigation";

export default function DropdownButton({ bookCategories }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (e) => {
    router.push(`${pathname}?CatId=${e.target.value}`);
  };
  return (
    <>
      <div>
        {/* Button for filtering by category */}
        <select
          onChange={handleSelect}
          className="border border-gray-300 rounded-md text-gray-900 focus:ring-2 px-4 py-2"
        >
          <option value="" className="text-gray-700">
            Filter by category
          </option>
          {bookCategories.map((category, index) => {
            return (
              <option key={index} value={category.id} className="text-gray-700">
                {category.cartoon_genre ?? category.book_cate_name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
