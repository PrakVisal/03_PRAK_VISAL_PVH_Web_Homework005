
import BookCard from '@/components/bookCard'
import categoryBookService from '@/service/categoryBook'
import React from 'react'

export default async function BookCategory() {
    const bookCategory = await categoryBookService()
  return (
    <>
    <div>Hello</div>
    {bookCategory.map((data)=>(
        <BookCard data={data} key={data.id}/>
    ))}
    </>
  )
}
