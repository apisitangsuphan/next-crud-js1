"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
function EditPost({ params }) {
  const { id } = use(params);
  const [newTitle, setNewTitle] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newContent, setNewContent] = useState("");
  const [postData, setPostData] = useState([]);

  const router = useRouter();
  console.log("ID :", id);
  const getPostById = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to get post by id");
      }
      const data = await res.json();
      setPostData(data.post);
      console.log("Post Data: ", data.post);
      console.log("Post ID in getpost: ", id);
    } catch (error) {
      console.log(`Error getting post by id: ${id}`, error);
    }
  };
console.log("New post data: ", newTitle, newImg, newContent);
  const handleSubmit = async (e) => {
    e.preventDefault();
    /* if (!title || !img || !content) {
      alert("Please complete all inputs");
      return;
    } */
   const updatedPost = {
            title:  newTitle || postData?.title,
            img:  newImg || postData?.img,
            content:  newContent || postData?.content,
          };
    try {
        
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        //
/*         body: JSON.stringify({ title : newTitle || postData?.title,img: newImg || postData?.img,content : newContent || postData?.content}),
 */        
        body: JSON.stringify(updatedPost),

});

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a post");
      }
      const data = await res.json();
      console.log("Edit post: ", data);
      setPostData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPostById(id);
  }, []);
  return (
    <div className="container mx-auto p-4 my-4">
      <h3 className="text-3xl font-bold">Edit Post</h3>
      <hr className="ny-3" />
      <Link
        href="/"
        className="bg-gray-500 inline-block text-white border p-3 rounded my-2"
      >
        Go Back
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder={postData?.title || "Nothing to display"}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder={postData?.img || "Nothing to display"}
          onChange={(e) => setNewImg(e.target.value)}
        />
        <textarea
          name=""
          id=""
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder={postData?.content || "Nothing to display"}
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-green-400 text-white border py-2 px-3 rounded-lg text-lg"
        >
          Edit Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
