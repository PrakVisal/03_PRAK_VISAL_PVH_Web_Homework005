import Link from "next/link";
import Image from "next/image";

import { HomeIcon } from "@/constant/menu";
import { GetCartoonById } from "@/service/cartoon_service";
import TopNavBar from "@/components/topNavbar";

export default async function CartoonDetailPage({ params }) {
  const paramId = params.cartoonId;

  const cartoonById = await GetCartoonById(paramId);

  return (
    <div className="bg-slate-100 h-screen p-10 w-full overflow-auto relative">
      <div className="h-[15%] m-auto w-[80%]">
        <ul>
          {/* <li>
            <Link href="/home" className="text-[30px] font-bold">
              <Image
                src={home}
                alt="Home"
                className="w-8 inline-block mb-2 mr-2"
              />
              Home
            </Link>
            <Image
              src={arrowRight}
              alt="Arrow Right"
              className="w-8 inline-block mb-3 mx-3"
            />
            <Link href="/cartoon-category" className="text-[30px] font-bold">
              <Image
                src={school}
                alt="School"
                className="w-8 inline-block mb-2 mr-2"
              />
              Old-School Cartoons
            </Link>
            <Image
              src={arrowRight}
              alt="Arrow Right"
              className="w-8 inline-block mb-3 mx-3"
            />
            <Link href="" className="text-[30px] text-red-600 font-bold">
              <Image
                src={playCircle}
                alt="Play Circle"
                className="w-8 inline-block mb-2 mr-2"
              />
              {cartoonById.ct_title}
            </Link>
          </li> */}
          <li>
            <TopNavBar />
          </li>
        </ul>
      </div>
      <div className="bg-white h-auto m-auto rounded-[30px] w-[80%]">
        <div className="absolute right-[300px] top-[50px]">
          <img
            src={cartoonById.image}
            alt={cartoonById.ct_title}
            className="h-96 rounded-[40px] w-full"
          />
        </div>
        <div className="p-20">
          <h1 className="text-[30px] font-bold pt-44">
            {cartoonById.ct_title}
          </h1>
          <p className="text-[27px] py-4">
            By{" "}
            <span className="text-[#087E8B] inline-block">
              {cartoonById.ct_creator}
            </span>
          </p>
          <p className="text-[#087E8B] text-[24px] pb-3">
            {/* <img src={eye} alt="Eye" className="inline-block mb-2" />{" "} */}
            {cartoonById.view_count} | {cartoonById.published_year}
          </p>
          <p className="text-[20px]">{cartoonById.ct_description}</p>
        </div>
      </div>
    </div>
  );
}
