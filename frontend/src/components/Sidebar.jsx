import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { LiaComments } from "react-icons/lia";
import { CiCircleList } from "react-icons/ci";

const Sidebar = () => {
  const location = useLocation();


  return (
    <aside className='w-64 h-[calc(100vh-5rem)] bg-white p-4 shadow-md'>
      <nav className='flex flex-col gap-3 sticky top-20 overflow-auto max-h-[calc(100vh-5rem)]'>

        <Link to={"/admin"} className={`px-3 py-2 flex items-center gap-2 rounded-md text-sm ${location.pathname === "/admin" ? 'bg-[#F2F0FF] text-[#5044E5]' : 'text-gray-700 hover:bg-gray-50'}`}>
          <MdOutlineDashboard className={`text-2xl ${location.pathname==="/admin" ? 'text-[#5044E5]': 'text-gray-700 hover:bg-gray-50'}`}/>
          Dashboard
        </Link>

        <Link to={"/admin/add"} className={`px-3 py-2 flex items-center gap-2 rounded-md text-sm ${location.pathname === "/admin/add" ? 'bg-[#F2F0FF] text-[#5044E5]' : 'text-gray-700 hover:bg-gray-50'}`}>
          <HiOutlineViewGridAdd className={`text-2xl ${location.pathname==="/admin/add" ? 'text-[#5044E5]': 'text-gray-700 hover:bg-gray-50'}`}/>
          Add Blogs
        </Link>

        <Link to={"/admin/list"} className={`px-3 py-2 flex items-center gap-2 rounded-md text-sm ${location.pathname === "/admin/list" ? 'bg-[#F2F0FF] text-[#5044E5]' : 'text-gray-700 hover:bg-gray-50'}`}>
          <CiCircleList className={`text-2xl ${location.pathname==="/admin/list" ? 'text-[#5044E5]': 'text-gray-700 hover:bg-gray-50'}`}/>
          Blogs List
        </Link>

        <Link to={"/admin/comments"} className={`px-3 py-2 flex items-center gap-2 rounded-md text-sm ${location.pathname === "/admin/comments" ? 'bg-[#F2F0FF] text-[#5044E5]' : 'text-gray-700 hover:bg-gray-50'}`}>
          <LiaComments className={`text-2xl ${location.pathname==="/admin/comments" ? 'text-[#5044E5]': 'text-gray-700 hover:bg-gray-50'}`}/>
          Comments
        </Link>

      </nav>
    </aside>
  )
}

export default Sidebar
