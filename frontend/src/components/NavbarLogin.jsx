import React from 'react'
import { assets } from "../assets/assets"
import { useNavigate } from 'react-router-dom'
import useLogout from '../hooks/useLogout';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const navigate = useNavigate();
    const { logout }= useLogout();

    const handleLogout = async () => {
        await logout();
    }

    return (
        <div className='sticky top-0 z-40 bg-white'>
          <div className='px-10 pt-3 pb-2 flex justify-between items-center max-w-7xl mx-auto'>
              <img onClick={() => navigate("/")} src={assets.logo} alt="" className='h-8 cursor-pointer' />
              <div className='flex gap-2 items-center'>
              <button onClick={handleLogout} className='bg-[#5044E5] text-white px-5 py-2 rounded-full'>Logout</button>
              <img onClick={() => navigate("/admin")} src={assets.user_icon} alt="" className='h-8 rounded-full cursor-pointer' />
              </div>
          </div>
        </div>
    )
}

export default Navbar
