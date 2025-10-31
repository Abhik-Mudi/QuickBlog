import React from 'react'
import axios from "axios"
import toast from 'react-hot-toast'

const API_URL = import.meta.env.IS_PRODUCTION ? import.meta.env.VITE_API_URL : 'localhost:5000';

const useAddBlog = () => {

    const addBlog = async (formData) => {
        try {
            const res = await axios.post(`${API_URL}/api/blogs/add`, formData);

            toast.success("Blog added successfully")
            return res.data;
        } catch (error) {
            toast.error(error.message)
        }
    }

    return {addBlog}
}

export default useAddBlog
