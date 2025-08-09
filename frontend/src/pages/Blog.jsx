import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blog_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogDetails from '../components/BlogDetails';
import Comments from '../components/Comments';

const Blog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null)

  const fetchBlog = async () => {
    const data = blog_data.find(blog => blog._id === id)
    setBlog(data);
  }

  useEffect(() => {
    fetchBlog();
  }, []);


  return (
    <div className='m-auto w-10/12 mt-2'>
      <Navbar />
      {blog ? (
        <>
          <BlogDetails blog={blog}/>
          <hr className='mb-4 bg-gray-500'/>
          <Comments />
        </>
      ) : (<div>Loading...</div>)
      }
      <Footer />
    </div>
  )
}

export default Blog
