import React, { useEffect } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import Sidebar from '../components/Sidebar'
import { blog_data, dashboard_data } from '../assets/assets';
import { MdOutlineDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const AdminPanel = ({ children }) => {

  const navigate = useNavigate();

  const recent = [
    { id: '1', title: 'Understanding React Hooks', author: 'Alice', date: '2025-07-10' },
    { id: '2', title: 'Styling with Tailwind', author: 'Bob', date: '2025-07-02' },
    { id: '3', title: 'Deploying Node apps', author: 'Charlie', date: '2025-06-22' },
  ];


  return (
    <div className=" bg-gray-50">
      <NavbarLogin />

      <div className="flex pt-4">
        {/* Sidebar (left) */}
        <div className="hidden lg:block w-64 px-4">
          <Sidebar className="max-h-[100vh]"/>
        </div>

        {/* Main content */}
          <main className="flex-1 px-6">
            <div className="max-w-7xl mx-auto h-[calc(100vh-5rem)] overflow-auto pb-8">
            {/* Header */}
            <div className="rounded-2xl bg-gradient-to-r from-[#5044E5] to-indigo-600 text-white p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                  <p className="text-sm opacity-90 mt-1">Manage posts, comments and users</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={()=>navigate("/admin/add")} className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm">Create Post</button>
                  <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm">Settings</button>
                </div>
              </div>
            </div>

            {/* If children are provided (admin sub-pages), render them; otherwise show default dashboard */}
            {children ? (
              <div className="mb-6">{children}</div>
            ) : (
              <>
                {/* Stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {Object.entries(dashboard_data).map(([key, value]) => (
                    <div key={key} className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">{value}</p>
                        <p className="text-xl font-bold text-gray-900 mt-1">{key}</p>
                      </div>
                      <div className="bg-[#F2F0FF] text-[#5044E5] p-3 rounded-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L12 22" stroke="#5044E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 9L12 2L19 9" stroke="#5044E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent posts */}
                <div className="bg-white rounded-2xl p-4 shadow">

                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Recent Posts</h2>
                    <button onClick={()=>navigate("/admin/list")} className="text-sm bg-[#5044E5] text-white px-3 py-1 rounded-md">View all</button>
                  </div>

                  <div className="divide-y">
                    {recent.map((post) => (
                      <div key={post.id} className="py-3 flex items-center justify-between">
                        <div>
                          <p className="font-medium">{post.title}</p>
                          <p className="text-xs text-gray-500">by {post.author} • {post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminPanel
