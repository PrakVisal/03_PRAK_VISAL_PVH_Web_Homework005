import AllBooks from '@/service/allBooks'
import React from 'react'

async function Book() {
    const allbooks = await AllBooks()
  return (
    <div>bookPage</div>
  )
}

export default Book