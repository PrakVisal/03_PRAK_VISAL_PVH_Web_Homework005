export async function AllBooksService() {
  const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
  const getPayload = await res.json();
  const data = await getPayload.payload;
  return data;
}

export async function AllCartoonService() {
  const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");
  const getPayload = await res.json();
  const data = await getPayload.payload;
  return data;
}

export default async function getBookByCategoryIdService(id) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book?query=${id}`
  );
  const getPayload = await res.json();
  const data = await getPayload.payload;

  return data;
}

export async function IdBookService(id) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book/${id}`
  );
  const allData = await res.json();
  const data = await allData.payload;
  return data;
}

export async function titleBook({ title }) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book?search=${title}`
  );
  const data = await res.json();
  return data;
}
