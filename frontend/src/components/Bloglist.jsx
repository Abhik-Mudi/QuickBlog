import React, { useState } from 'react'
import blog_pic_1 from '../assets/blog_pic_1.png'
import { blog_data, blogCategories } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Bloglist = () => {
    const navigate = useNavigate();

    const [menu, setMenu] = useState("All")
    const handleMenu = (category) => {

        setMenu(category);
    }
    return (
        <>
            <div className='flex flex-wrap w-1/2 gap-7 m-auto mt-5'>
                {blogCategories.map((category, idx) => {
                    return (
                        <button key={idx} onClick={() => handleMenu(category)}
                            className={`px-2 py-1 rounded-xl text-sm cursor-pointer ${menu === category && 'bg-[#5044E5] text-white'}`}>{category}</button>
                    )
                })}
            </div>

            <div className='flex flex-wrap gap-3 mt-10'>
                {blog_data.filter(blog=>menu=="All"?true:menu==blog.category).map((blog, idx) => {
                    return (
                        <div key={blog._id} className='flex flex-col gap-1 w-[23%] overflow-hidden bg-gray-200 rounded-2xl shadow-lg'>
                            <img  onClick={()=>navigate(`blog/${blog._id}`)}  className='rounded-t-2xl cursor-pointer' src={blog.image} alt="" />
                            <div className='p-7'>
                                <button className='bg-[#5044E5]/20 w-1/2 text-xs text-[#5044E5] px-2 py-1 rounded-xl'>{blog.category}</button>
                                <h1 className='font-semibold mt-5'>{blog.title}</h1>
                                <p className="text-xs mt-2 text-gray-700 leading-relaxed line-clamp-2"
                                    style={{ minHeight: "2.5em" }} dangerouslySetInnerHTML={{
                                    "__html": blog.description.slice(0, 60)
                                }}></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Bloglist
