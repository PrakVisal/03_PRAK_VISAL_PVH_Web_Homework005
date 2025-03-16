
async function AllBooksService() {
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
    const getPayload = await res.json()
    const data = await getPayload.payload
    console.log(data)
  return data
}

export default AllBooksService