import React from 'react'

export async function IdBookService({id}) {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/${id}`)
    const data = res.json()
    return data
}
