import { Button } from "@heroui/react";
import Image from "next/image";

const SpecialCard = ({ data }) => {
  const { book_title, book_author, description, image } = data;

  return (
    <div className="flex bg-white m-4 p-4 rounded-2xl shadow-lg items-center max-w-lg">
      {/* Book Cover */}
      <div className="flex justify-center rounded-3xl w-full items-center relative z-10">
        <div className="container">
          <img
            src={image}
            alt="How Do You Live?"
            className="h-60 rounded-3xl shadow-lg w-44"
          />
          {/* Button */}
          <Button className="bg-blue-500 rounded-3xl text-sm text-white font-medium hover:bg-blue-600 mt-3 px-4 py-2">
            READ FULL ARTICLE
          </Button>
        </div>
        {/* Text Content */}
        <div className="w-2/3 absolute bottom-0 pl-12 right-0">
          <h2 className="text-gray-900 text-lg font-semibold">{book_title}</h2>
          <p className="text-gray-600 text-sm line-clamp-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
