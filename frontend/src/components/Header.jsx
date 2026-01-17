import React from 'react'

const Header = () => {
  return (
    <div className='md:w-1/2 flex flex-col items-center m-auto mt-10 text-center'>
      <h1 className=' md:text-5xl text-3xl font-semibold'>Your own <span className='text-[#5044E5]'>blogging</span> platform</h1>
      <h6 className='font-medium w-[80%] text-xs text-gray-500 mt-4'>This is your space to think out loud, to share what matters and to write without filters.Wheather it is one word or a thousand, your story starts here</h6>
    </div>
  )
}

export default Header
