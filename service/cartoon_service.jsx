export async function AllCartoonCategoryService() {
  const res = await fetch(
    "https://nextjs-homework005.vercel.app/api/cartoon_genre"
  );
  const payload = await res.json();
  const data = await payload.payload;
  return data;
  //   const { payload } = await res.json();
  //   console.log(payload);
  //   return payload;
}

export async function FilterCartoonById(id) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon?genre=${id}`
  );
  const payload = await res.json();
  const data = await payload.payload;
  return data;
}

export async function GetCartoonById(id) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon/${id}`
  );
  const payload = await res.json();
  const data = await payload.payload;
  return data;
}

export async function SearchCartoonByTitle(title) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon?search=${title}`
  );
  const payload = await res.json();
  const data = await payload.payload;
  return data;
}
