import React, { useState } from 'react'
import { comments_data } from '../assets/assets'
import { formatDate } from '../utils/convertTime'
import { FaRegCircleUser } from "react-icons/fa6";
import moment from 'moment'

const Comments = () => {
  const [comment, setComment] = useState({
    name: '',
    content: '',
  })

  const handleComment = (e) => {
    e.preventDefault();
    console.log(comment);
    
  }
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-center font-bold'>Comments ({comments_data.length})</p>
      {comments_data && comments_data.map((comment, idx) => {
        return (
            <div className='bg-[#e9edfad5] m-auto w-1/2 flex flex-col p-4 border-1 border-gray-300' key={idx}>
                <div className='flex justify-between items-center'>
                    
                    <span className='text-sm flex items-center gap-2'><FaRegCircleUser />{comment.name}</span>
                    <span className='text-xs'>{moment(comment.createdAt).fromNow()}</span>
                </div>
                <p className='text-xs mt-2'>{comment.content}</p>
            </div>
        )
      })}
      <div className='m-auto mt-7 flex flex-col gap-2 w-1/2'>
        <h1>Add your comment</h1>
        <form onSubmit={handleComment} style={{"padding": 0}} className='w-full flex flex-col gap-2 justify-start' action="">
          <input value={comment.name} onChange={(e)=>setComment({...comment, name:e.target.value})} className='text-sm font-light border px-2 py-1 border-gray-400 rounded-md w-full' type="text" placeholder='Name'/>
          <textarea value={comment.content} onChange={(e)=>setComment({...comment, content:e.target.value})} rows={5} className=' text-sm font-light border p-2 border-gray-400 rounded-md w-full' name="" id="" placeholder='Comment'></textarea>
          <button type='submit' onClick={handleComment} className='bg-[#5044E5] w-1/4 rounded-lg px-2 py-1 self-start text-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Comments
