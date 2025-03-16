import React from 'react'

export default async function titleBook({title}) {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?search=${title}`)
    const data = await res.json()
    return data
}
