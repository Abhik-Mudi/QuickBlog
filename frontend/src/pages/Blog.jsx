import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blog_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import BlogDetails from '../components/BlogDetails';
import Comments from '../components/Comments';
import useFetchBlog from '../hooks/useFetchBlog';
import { useAuthContext } from '../context/authContext';

const Blog = () => {
  const { authUser } = useAuthContext();
  const { id } = useParams();
  const { fetchBlogById } = useFetchBlog();

  const [blog, setBlog] = useState(null)

  const fetchBlog = async (id) => {
    const data = await fetchBlogById(id)
    setBlog(data);
    console.log(data);
  }

  useEffect(() => {
    fetchBlog(id);
  }, []);


  return (
    <div className='m-auto w-10/12 mt-2'>
      {authUser ? <NavbarLogin /> : <Navbar />}
      {blog ? (
        <>
          <BlogDetails blog={blog} />
          <hr className='mb-4 bg-gray-500' />
          <Comments />
        </>
      ) : (<div>Loading...</div>)
      }
      <Footer />
    </div>
  )
}

export default Blog
