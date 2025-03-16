import React from 'react'

export default async function IdBook({params}) {
    const bookId = (await params).bookid
  return (
    <div>{bookId}</div>
  )
}
