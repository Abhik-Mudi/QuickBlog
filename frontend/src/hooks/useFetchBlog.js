import React from 'react'
import toast from 'react-hot-toast'

const useFetchBlog = () => {
  
    const fetchBlogs = async ()=>{
        try {
            const res= await fetch("/api/blogs")
            const data = await res.json();
            return data;
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    const fetchBlogById = async (id)=>{
        try {
            const res = await fetch(`/api/blogs/${id}`);
            const data = await res.json();
            return data;
        } catch (error) {
            toast.error(error.message)
        }
    }

    return {fetchBlogs, fetchBlogById}
}

export default useFetchBlog
