import React from 'react'
import axios from "axios"
import toast from 'react-hot-toast'

const useAddBlog = () => {

    const addBlog = async (formData) => {
        try {
            const res = await axios.post("/api/blogs/add", formData);

            toast.success("Blog added successfully")
            return res.data;
        } catch (error) {
            toast.error(error.message)
        }
    }

    return {addBlog}
}

export default useAddBlog
