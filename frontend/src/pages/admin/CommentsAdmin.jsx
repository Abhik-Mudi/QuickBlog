import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import moment from 'moment'
import useFetchComment from '../../hooks/useFetchComment'
import { Link } from 'react-router-dom'

const CommentsAdmin = () => {
  const [comments, setComments] = useState([]);
  const {fetchAllCommentsByUser} = useFetchComment()
  const fetchComments=async ()=>{
    const data=await fetchAllCommentsByUser()
    setComments(data)
  }
  useEffect(() => {
    fetchComments()
  }, [])
  
  return (
    <div className='bg-white rounded-2xl p-6 shadow'>
      <h2 className='text-lg font-semibold mb-4'>Comments</h2>
      <div className='divide-y'>
        {comments.map((c, idx) => (
          <div key={idx} className='py-3 flex items-start justify-between'>
            <div>
              <p className='font-medium flex items-center gap-2'>Commented On: <Link to={`/blog/${c.post._id}`}>{c.post.title}</Link></p>
              <p className='text-sm font-medium mt-4 text-gray-800'>{c.content}</p>
            </div>
            <div className='text-xs text-gray-500'>{moment(c.createdAt).fromNow()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsAdmin
