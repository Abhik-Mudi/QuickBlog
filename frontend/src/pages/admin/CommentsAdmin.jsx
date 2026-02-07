import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import moment from 'moment'
import useFetchComment from '../../hooks/useFetchComment'
import { Link } from 'react-router-dom'

const CommentsAdmin = () => {
  const [comments, setComments] = useState([]);
  const {isLoading, fetchAllCommentsByUser} = useFetchComment()

  const fetchComments=async ()=>{
    const data=await fetchAllCommentsByUser()
    
    setComments(data)
  }
  useEffect(() => {
    fetchComments()
  }, [])  

  if(isLoading) return <div>Loading...</div>
  
  return (
    <div className='bg-white rounded-2xl p-6 shadow'>
      <h2 className='text-lg font-semibold mb-4'>Comments</h2>
      <div className='divide-y'>
        {comments?.length==0 && <div className='text-gray-500'>No comments yet</div>}
        {comments.map((c, idx) => (
          <div key={idx} className='py-3 flex items-start justify-between'>
            <div>
              <p className='font-medium flex items-center gap-2'>Commented On: <Link to={`/blog/${c.post._id}`}>{c.post.title}</Link></p>
              <p className='text-sm font-medium mt-4 text-gray-800'>{c.content}</p>
            <div className='text-xs mt-2 text-gray-500'>{moment(c.createdAt).fromNow()}</div>
            </div>
            <div className='flex items-center gap-2'>
              <button className='text-sm text-red-500 border border-red-200 px-3 py-1 rounded-md'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsAdmin
