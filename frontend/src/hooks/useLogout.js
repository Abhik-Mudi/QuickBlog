import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContext'

const isProduction = import.meta.env.PROD;
const API_URL = isProduction ? import.meta.env.VITE_API_URL : 'http://localhost:5000';

const useLogout = () => {
  const [loading, setLoading] = useState(false)

  const {setAuthUser}= useAuthContext()

  const logout=async ()=>{
    setLoading(true)
    try {
        const res=await fetch(`${API_URL}/api/auth/logout`, {
            method: "POST",
            headers: { "content-type" : "application/json" }, 
            credentials: "include"
        });
        const data=await res.json();

        if(data.error) throw new Error(data.error);
        
        localStorage.removeItem("blogUser")
        setAuthUser(null)
    } catch (error) {
      toast.error(error.message)  
    } finally{
        setLoading(false)
    }
  }

  return {loading, logout}
}

export default useLogout
