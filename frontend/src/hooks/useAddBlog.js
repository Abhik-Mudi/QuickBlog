import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'

const isProduction = import.meta.env.PROD;
const API_URL = isProduction ? import.meta.env.VITE_API_URL : 'http://localhost:5000';

const useAddBlog = () => {
    const [isPublishing, setIsPublishing]=useState(false)

    const addBlog = async (formData) => {
        setIsPublishing(true)
        try {
            const res = await axios.post(`${API_URL}/api/blogs/add`, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success("Blog added successfully")
            return res.data;
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsPublishing(false)
        }
    }

    return {isPublishing, addBlog}
}

export default useAddBlog
