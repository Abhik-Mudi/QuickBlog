import React from 'react'
import { comments_data } from '../../assets/assets'
import { FaRegCircleUser } from 'react-icons/fa6'
import moment from 'moment'

const CommentsAdmin = () => {
  return (
    <div className='bg-white rounded-2xl p-6 shadow'>
      <h2 className='text-lg font-semibold mb-4'>Comments</h2>
      <div className='divide-y'>
        {comments_data.map((c, idx) => (
          <div key={idx} className='py-3 flex items-start justify-between'>
            <div>
              <p className='font-medium flex items-center gap-2'><FaRegCircleUser/>{c.name}</p>
              <p className='text-xs text-gray-500'>{c.content}</p>
            </div>
            <div className='text-xs text-gray-500'>{moment(c.createdAt).fromNow()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsAdmin
