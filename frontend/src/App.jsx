import React from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import AddBlog from './pages/admin/AddBlog'
import BlogListAdmin from './pages/admin/BlogListAdmin'
import CommentsAdmin from './pages/admin/CommentsAdmin'
import { useAuthContext } from './context/authContext'
import 'quill/dist/quill.snow.css'


const App = () => {
  const navigate = useNavigate()
  const { authUser } = useAuthContext()
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={authUser ? <AdminPanel /> : <Login />} />
        <Route path="/admin" element={authUser ? <AdminPanel /> : <Navigate to="/login" />} />
        <Route path="/admin/add" element={authUser ? <AdminPanel><AddBlog /></AdminPanel> : <Navigate to="/login" />} />
        <Route path="/admin/list" element={authUser ? <AdminPanel><BlogListAdmin /></AdminPanel> : <Navigate to="/login" />} />
        <Route path="/admin/comments" element={authUser ? <AdminPanel><CommentsAdmin /></AdminPanel> : <Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
