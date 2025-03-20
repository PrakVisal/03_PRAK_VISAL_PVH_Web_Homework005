export async function AllCategoriesService() {
  const res = await fetch(
    "https://nextjs-homework005.vercel.app/api/book_category"
  );
  const getPayload = await res.json();
  const data = await getPayload.payload;
  return data;
}

export async function AllBooksService(id) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book_category/search?query=${id}`
  );
  const getPayload = await res.json();
  const data = await getPayload.payload;
  return data;
}
