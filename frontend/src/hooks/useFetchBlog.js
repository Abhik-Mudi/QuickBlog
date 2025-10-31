import React from 'react'
import toast from 'react-hot-toast'

const isProduction = import.meta.env.IS_PRODUCTION;
const API_URL = isProduction ? import.meta.env.VITE_API_URL : 'localhost:5000';

const useFetchBlog = () => {
  
    const fetchBlogs = async ()=>{
        try {
            const res= await fetch(`${API_URL}/api/blogs`)
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
