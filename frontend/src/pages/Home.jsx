import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Search from '../components/Search'
import Bloglist from '../components/Bloglist'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import { useAuthContext } from '../context/authContext'
import NavbarLogin from '../components/NavbarLogin'

const Home = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='m-auto md:w-10/12 mt-2'>
      {authUser ? <NavbarLogin />:<Navbar />}
      <Header/>
      <Search/>
      <Bloglist/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home
