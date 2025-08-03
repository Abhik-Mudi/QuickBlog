import React from 'react'
import {blogCategories} from '../assets/assets.js'
import { useState } from 'react'

const Buttons = () => {
  const [menu, setMenu] = useState("All")
  return (
    <div className='flex w-1/2 gap-7 m-auto mt-5'>
      {blogCategories.map((category, idx)=>{
        return (
          <button key={idx} onClick={()=>setMenu(category)}
           className={`px-2 py-1 rounded-xl text-sm cursor-pointer ${menu===category && 'bg-[#5044E5] text-white'}`}>{category}</button>
        )
      })}
    </div>
  )
}

export default Buttons
