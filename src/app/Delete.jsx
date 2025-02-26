import React from 'react'
import Link from 'next/link'

function DeletePost({id}) {
  return (
    <Link className="bg-red-500 text-white border p-2 rounded-md text-lg" href={`/delete/${post?._id}`}>Delete</Link>
  )
}

export default DeletePost