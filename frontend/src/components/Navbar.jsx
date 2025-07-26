import React from 'react'
import {assets} from "../assets/assets"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
      <img src={assets.logo} alt="" />
      <button className='bg-[#5044E5] text-white px-5 py-2 rounded-full'>Sign In</button>
    </div>
  )
}

export default Navbar
