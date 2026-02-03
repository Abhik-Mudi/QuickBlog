import React, { useState } from 'react'
import toast from 'react-hot-toast'

const isProduction = import.meta.env.PROD;
const API_URL = isProduction ? import.meta.env.VITE_API_URL : 'http://localhost:5000';

const useDeleteBlog = () => {
    const [isLoading, setIsLoading]=useState(false);
  const deleteBlogById=async(id)=>{
    setIsLoading(true)
    try {
        const res=await fetch(`${API_URL}/api/blogs`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({id})
        })
        const data=await res.json();
        console.log(data)
        return data;
    } catch (error) {
        toast.error(error.message)
    } finally {
        setIsLoading(false)
    }
  }

  return {isLoading, deleteBlogById}
}

export default useDeleteBlog