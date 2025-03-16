export default function BookCard({data}) {
  return (
    <div className="relative w-64 h-80 group rounded-[10%] m-2 p-2">
      <img
      src={data.image}
      alt="image"
      className="w-full h-full object-cover"
      />
      {/* Title & Hover Effect */}
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2">
        <p className="text-white text-3xl mt-2 font-semibold">View All</p>
        <p className="text-white text-3xl mt-2 font-semibold">Available</p>
        <p className="text-white text-3xl mt-2 font-semibold">{data.book_title}</p>
      </div>
      <div className="absolute top-5 left-6 bg-white px-2 py-1 rounded-full shadow-md text-[0.8rem] font-semibold">
        📖 {data.book_title}
      </div>
      </div>
  );
}