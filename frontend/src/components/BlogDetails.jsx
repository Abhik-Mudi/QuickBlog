import React from 'react'
import { formatDate } from '../utils/convertTime';

const BlogDetails = ({blog}) => {
    
    return (
        <div className='flex w-full flex-col justify-center text-center items-center mt-20'>
            <h3 className='text-[#5044E5] text-sm'>Published on {formatDate(blog.createdAt)}</h3>
            <h1 className='md:text-5xl text-3xl p-2 font-semibold'>{blog.title}</h1>
            <h3 className='mt-5 text-gray-600'>{blog.subtitle}</h3>
            <button className=' border-1 border-[#4439e7] bg-[#e8e5f7d5] text-[#5044E5] px-2 py-1 rounded-full mt-5'>{blog.author.username}</button>
            <img className='mt-5 rounded-2xl' src={blog.image} alt="" />
            <div className='rich-text md:p-5 p-3 text-start' dangerouslySetInnerHTML={{
                "__html": blog.content
            }}></div>
        </div>
    )
}

export default BlogDetails
