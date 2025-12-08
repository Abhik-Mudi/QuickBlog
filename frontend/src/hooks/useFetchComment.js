import React from 'react'
import toast from 'react-hot-toast';

const isProduction = import.meta.env.PROD;
const API_URL = isProduction ? import.meta.env.VITE_API_URL : 'http://localhost:5000';

const useFetchComment = () => {

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

  return {fetchComment, fetchAllComments};
}

export default useFetchComment
