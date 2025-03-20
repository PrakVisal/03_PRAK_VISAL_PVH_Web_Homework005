"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchField() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchParam = `?search=${searchQuery}`;
      const newPath =
        pathname === "/" ? `/book-categories${searchParam}` : searchParam;
      router.replace(newPath);
    } else {
      router.replace(pathname);
      setSearchQuery("");
    }
  };

  return (
    <>
      <div className="w-[94%] ml-11 mt-11 relative">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="q"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-0 h-12 p-4 rounded-full w-full focus:outline-none"
            placeholder="Search Book or Category"
          />
          <button type="submit" className="absolute right-3 top-3.5">
            <svg
              className="h-5 text-gray-200-400 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
