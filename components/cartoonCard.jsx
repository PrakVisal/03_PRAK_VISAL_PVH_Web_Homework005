import { Eye } from "iconsax-react";
import Link from "next/link";

export default function CartoonCard({ data }) {
  const { image, ct_title, view_count, published_year } = data;
  const newYear = published_year?.split("-")[0] || "Unknown";

  return (
    <Link
      href={`/read-full-article/${data.id}?type=cartoon&name=old+school+cartoon&title=${data.ct_title}`}
    >
      <div className="rounded-xl max-w-2xl ml-14 mt-10">
        <img
          src={image}
          alt={ct_title}
          className="h-[90%] rounded-2xl shadow-md w-80 object-cover"
        />

        <h1 className="text-[#0b3954] text-md font-bold mt-2">{ct_title}</h1>
        <div className="flex items-center mt-2">
          <div className="flex gap-2 items-center">
            <Eye color="#718096" variant="Outline" size={25} />
            <p className="text-[#087e8b] font-bold">{view_count} times</p>|
          </div>
          <p className="text-[#087e8b] font-bold pl-3">{newYear}</p>
        </div>
      </div>
    </Link>
  );
}
