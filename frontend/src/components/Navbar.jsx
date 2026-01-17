import React from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='flex justify-between px-5 items-center '>
      <img onClick={()=>navigate("/")} src={assets.logo} alt="" />
      <button onClick={()=>navigate("/login")} className='bg-[#5044E5] text-white px-5 py-2 rounded-full'>Sign In</button>
    </div>
  )
}

export default Navbar
