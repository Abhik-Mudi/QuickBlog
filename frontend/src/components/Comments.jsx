import React, { useEffect, useState } from 'react'
import { comments_data } from '../assets/assets'
import { formatDate } from '../utils/convertTime'
import { FaRegCircleUser } from "react-icons/fa6";
import moment from 'moment'
import useFetchComment from '../hooks/useFetchComment';
import { useParams } from 'react-router-dom';
import useAddComment from '../hooks/useAddComment';
import { useAuthContext } from '../context/authContext';
import toast from 'react-hot-toast';

const Comments = () => {
  const {id}=useParams();
  const { authUser } = useAuthContext();

  const {fetchComment}=useFetchComment();
  const {isAddingComment, addComment}=useAddComment();

  const [commentList, setCommentList] = useState([])
  
  const [comment, setComment] = useState({
    content: '',
  })

  const fetchAllComments=async(id)=>{
    const data=await fetchComment(id);
    setCommentList(data)
  }

  useEffect(() => {
    fetchAllComments(id)
  }, [])
  
  const handleComment = (e) => {
    e.preventDefault();
    
    if (!authUser) {
      toast.error("Please log in to add a comment");
      return;
    }
    
    if (!comment.content.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }
    
    addComment(id, comment.content);
    setComment({ content: '' });
  }

  return (
    <div className='flex flex-col gap-2'>
      <p className='text-center font-medium'>Comments ({commentList.length})</p>
      {commentList && commentList.map((comment, idx) => {
        return (
            <div className='bg-[#e9edfad5] m-auto md:w-1/2 w-[80%] flex flex-col p-4 border-1 border-gray-300' key={idx}>
                <div className='flex justify-between items-center'>
                    
                    <span className='text-sm flex items-center gap-2'><FaRegCircleUser />{comment.author.username}</span>
                    <span className='text-xs'>{moment(comment.createdAt).fromNow()}</span>
                </div>
                <p className='text-xs mt-2'>{comment.content}</p>
            </div>
        )
      })}
      <div className='m-auto mt-7 flex flex-col gap-2 md:w-1/2 w-[80%]'>
        <h1>Add your comment</h1>
        <form onSubmit={handleComment} style={{"padding": 0}} className='w-full flex flex-col gap-2 justify-start' action="">
          <textarea value={comment.content} onChange={(e)=>setComment({...comment, content:e.target.value})} rows={5} className=' text-sm font-light border p-2 border-gray-400 rounded-md w-full' name="" id="" placeholder='Comment'></textarea>
          <button type='submit' onClick={handleComment} className='bg-[#5044E5] w-1/4 rounded-lg px-2 py-1 self-start text-white'>
            <div class={`w-4 h-4 border-4 border-blue-500 border-t-transparent rounded-full ${isAddingComment ? 'animate-spin':'hidden'}`}></div>
            <div className={isAddingComment ? 'hidden':'block'}>Publish</div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Comments
