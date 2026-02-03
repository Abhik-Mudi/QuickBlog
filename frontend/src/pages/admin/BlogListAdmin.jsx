import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import useFetchBlog from '../../hooks/useFetchBlog'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AlertDialogDemo } from '../../components/DeleteModal';

const BlogListAdmin = () => {
  const navigate=useNavigate()
  const {fetchBlogByUserId} = useFetchBlog();
  const [isLoading, setIsLoading]=useState(false)
  const [isDeleteModal, setIsDeleteModal]=useState(false)
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

  const handleClick=async (e)=>{
    e.stopPropagation()
    e.preventDefault();
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
            <div onClick={handleClick} className='flex items-center gap-2'>
              <AlertDialogDemo id={b._id} size="md" onDeleteSuccess={fetchBlog}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogListAdmin
