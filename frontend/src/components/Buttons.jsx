import React from 'react'

const Buttons = () => {
  return (
    <div className='flex w-1/2 gap-7 m-auto mt-5'>
      <button className='bg-[#5044E5] px-2 py-1 rounded-xl text-sm text-white'>All</button>
      <button className=' px-2 py-1 rounded-xl text-sm'>Technology</button>
      <button className=' px-2 py-1 rounded-xl text-sm'>Startup</button>
      <button className=' px-2 py-1 rounded-xl text-sm'>Lifestyle</button>
      <button className=' px-2 py-1 rounded-xl text-sm'>Finance</button>
    </div>
  )
}

export default Buttons
