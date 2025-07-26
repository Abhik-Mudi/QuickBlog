import React from 'react'

const Search = () => {
  return (
    <div className='w-1/3 m-auto mt-10  border-2 bg-gray-500/10 border-gray-50 px-1 rounded-lg flex justify-center'>
      <input className='outline-0' type="text" placeholder='Search blogs'/>
      <button className='bg-[#5044E5] text-white px-2 py-2 rounded-lg'>Search</button>
    </div>
  )
}

export default Search
