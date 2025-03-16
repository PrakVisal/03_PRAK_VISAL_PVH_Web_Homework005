import React from 'react'

export default async function categoryBookService() {
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book?query=10")
    const getPayload = await res.json()
    const data = await getPayload.payload

    return data
}
