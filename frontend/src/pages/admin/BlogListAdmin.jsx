import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import useFetchBlog from '../../hooks/useFetchBlog'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BlogListAdmin = () => {
  const navigate=useNavigate()
  const {fetchBlogByUserId} = useFetchBlog();
  const [isLoading, setIsLoading]=useState(false)
  const [blogs, setBlogs] = useState([])

  const fetchBlog= async()=>{
    setIsLoading(true)
    try {
      const data= await fetchBlogByUserId();
      setBlogs(data)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBlog();
  }, [])
  
  return (
    <div className='bg-white rounded-2xl p-6 shadow'>
      <h2 className='text-lg font-semibold mb-4'>Your Blogs</h2>
      <div className='divide-y'>
        {blogs?.length==0 && <div className='text-gray-500'>No blogs yet</div>}
        {!isLoading && blogs?.map((b) => (
          <div key={b._id} onClick={()=>navigate(`/blog/${b._id}`)} className='py-3 flex items-center justify-between'>
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
