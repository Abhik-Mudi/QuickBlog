import React from 'react'
import toast from 'react-hot-toast'

const isProduction = import.meta.env.PROD;
const API_URL = isProduction ? import.meta.env.VITE_API_URL : 'http://localhost:5000';

const useAddComment = () => {
  const addComment = async (id, content)=>{
    try {
        const res = await fetch(`${API_URL}/api/comments/${id}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({content}),
        })
        const data=await res.json();
        toast.success("Comment added");
        return data;
    } catch (error) {
        toast.error(error.message)
    }
  }
  return {addComment}
}

export default useAddComment
