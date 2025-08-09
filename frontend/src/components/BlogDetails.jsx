import React from 'react'
import { formatDate } from '../utils/convertTime';

const BlogDetails = ({blog}) => {
    return (
        <div className='flex flex-col justify-center text-center items-center mt-20'>
            <h3 className='text-[#5044E5] text-sm'>Published on {formatDate(blog.createdAt)}</h3>
            <h1 className='text-5xl font-extrabold'>{blog.title}</h1>
            <h3 className='mt-5 text-gray-600' dangerouslySetInnerHTML={{
                "__html": blog.subTitle
            }}></h3>
            <button className=' border-1 border-[#4439e7] bg-[#e8e5f7d5] text-[#5044E5] px-2 py-1 rounded-full mt-5'>Abhik Mudi</button>
            <img className='mt-5 rounded-2xl' src={blog.image} alt="" />
            <div className='rich-text p-5 text-start' dangerouslySetInnerHTML={{
                "__html": blog.description
            }}></div>
        </div>
    )
}

export default BlogDetails
