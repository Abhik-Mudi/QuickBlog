import React, { useState } from 'react'

const Search = () => {
  const [searchBlog, setSearchBlog] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    
    // todo: Implement search functionality

    setSearchBlog("")
  }
  
  return (
    <div className='md:w-1/3 w-[80%] m-auto mt-10  border-2 bg-gray-500/10 border-gray-50 px-2 rounded-lg flex flex-row justify-between'>
      <input value={searchBlog} onChange={(e)=>setSearchBlog(e.target.value)} className='outline-0' type="text" placeholder='Search blogs'/>
      <button onClick={handleSearch} className='bg-[#5044E5] text-white px-2 py-2 rounded-lg'>Search</button>
    </div>
  )
}

export default Search
