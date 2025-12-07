import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import useFetchBlog from '../../hooks/useFetchBlog'

const BlogListAdmin = () => {
  const {fetchBlogs} = useFetchBlog();
  const [blogs, setBlogs] = useState([])

  const fetchBlog= async()=>{
    const data= await fetchBlogs();
    setBlogs(data)
  }

  useEffect(() => {
    fetchBlog();
  }, [])
  
  return (
    <div className='bg-white rounded-2xl p-6 shadow'>
      <h2 className='text-lg font-semibold mb-4'>All Blogs</h2>
      <div className='divide-y'>
        {blogs.map((b) => (
          <div key={b._id} className='py-3 flex items-center justify-between'>
            <div>
              <p className='font-medium'>{b.title}</p>
              <p className='text-xs text-gray-500'>{b.category}</p>
            </div>
            <div className='flex items-center gap-2'>
              <button className='text-sm text-[#5044E5] border border-[#5044E5] px-3 py-1 rounded-md'>Edit</button>
              <button className='text-sm text-red-500 border border-red-200 px-3 py-1 rounded-md'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogListAdmin
