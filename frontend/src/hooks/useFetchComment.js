import React, { useState } from 'react'
import toast from 'react-hot-toast';

const isProduction = import.meta.env.PROD;
const API_URL = isProduction ? import.meta.env.VITE_API_URL : 'http://localhost:5000';

const useFetchComment = () => {

  const [isLoading, setIsLoading]=useState(false)

  const fetchComment = async (id)=>{
    try {
        const res = await fetch(`${API_URL}/api/comments/${id}`)
        const data=await res.json();
        return data;
    } catch (error) {
        toast.error(error.message)
    }
  }

  const fetchAllComments = async()=>{
    try {
        const res= await fetch(`${API_URL}/api/comments`);
        const data= await res.json()
        return data;
    } catch (error) {
        toast.error(error.message)
    }
  }

  const fetchAllCommentsByUser=async (id)=>{
    setIsLoading(true)
    try {
      const res= await fetch(`${API_URL}/api/comments/user/${id}`,{
        credentials:'include',
      })
      const data=await res.json();
      return data;
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return {fetchComment, fetchAllComments, isLoading, fetchAllCommentsByUser};
}

export default useFetchComment
