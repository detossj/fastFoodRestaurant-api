import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutAdmin = () => {

  return (
    <>
    <TopBar/>
    <Navbar/>
      <Outlet/>
    <Footer/>
  </>
  )
}

export default LayoutAdmin