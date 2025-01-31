import React from 'react'

function card() {
  return (
   
        <div className="shadow-xl my-10 p-10 rounded-xl ">
          <h4>Post Title</h4>
          <div className="flex justify-center">
            <img
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Development"
            className="w-50 h-64 object-cover rounded"
          />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque odit obcaecati ab sunt veniam minus itaque. Eligendi, repellat quos!</p>
          <div className="my-5">
            <Link className="bg-gray-500 text-white border p-2 rounded-md text-lg" href="/edit">Edit</Link>
            <Link className="bg-red-500 text-white border p-2 rounded-md text-lg" href="/delete">Delete</Link>
          </div>
        </div>
      
  )
}

export default card
