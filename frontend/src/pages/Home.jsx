import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Search from '../components/Search'
import Buttons from '../components/Buttons'
import Bloglist from '../components/Bloglist'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='m-auto w-10/12 mt-2'>
      <Navbar/>
      <Header/>
      <Search/>
      <Buttons/>
      <Bloglist/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home
