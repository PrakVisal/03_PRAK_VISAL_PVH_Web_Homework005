import Image from "next/image";
import Link from "next/link";

export default function CardThumbnail({ path, title }) {
  return (
    <div className="relative w-72 h-[27rem] group rounded-3xl m-2 bg-black">
      <img
        src={`asset/${path}`}
        alt="Whisper of the Heart"
        className="absolute inset-0 rounded-3xl object-cover h-full w-full opacity-100 transition-opacity group-hover:opacity-50"
      />
      {/* Title & Hover Effect */}
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2">
        <p className="text-white text-3xl mt-2 font-semibold">View All</p>
        <p className="text-white text-3xl mt-2 font-semibold">Available</p>
        <p className="text-white text-3xl mt-2 font-semibold">{title}</p>
      </div>
      <div className="absolute top-5 left-6 bg-white px-3 py-1 rounded-full shadow-md text-[1rem] font-bold text-[#087E8B]">
        <div className="flex items-center gap-x-2">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.9365 10.8509L5.9565 13.8709C7.1965 15.1109 9.20984 15.1109 10.4565 13.8709L13.3832 10.9442C14.6232 9.70424 14.6232 7.69091 13.3832 6.44424L10.3565 3.43091C9.72317 2.79758 8.84984 2.45758 7.9565 2.50424L4.62317 2.66424C3.28984 2.72424 2.22984 3.78424 2.16317 5.11091L2.00317 8.44424C1.96317 9.34424 2.30317 10.2176 2.9365 10.8509Z"
              stroke="#087E8B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.48985 8.65096C7.41032 8.65096 8.15651 7.90477 8.15651 6.98429C8.15651 6.06382 7.41032 5.31763 6.48985 5.31763C5.56937 5.31763 4.82318 6.06382 4.82318 6.98429C4.82318 7.90477 5.56937 8.65096 6.48985 8.65096Z"
              stroke="#087E8B"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8.82318 11.9843L11.4898 9.31763"
              stroke="#087E8B"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1>{title}</h1>
        </div>
      </div>
    </div>

    // <Link href="#" className="group relative block bg-black">
    //   <img
    //     alt=""
    //     src={`asset/${path}`}
    //     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    //   />

    //   <div className="relative p-4 sm:p-6 lg:p-8">
    //     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
    //       Developer
    //     </p>

    //     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

    //     <div className="mt-32 sm:mt-48 lg:mt-64">
    //       <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
    //         <p className="text-sm text-white">
    //           {title}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
  );
}
