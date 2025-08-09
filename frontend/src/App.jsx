import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login'


const App = () => {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
