import React from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useProducts } from '../context/ProductsContext'
import LoadingBar from '../components/LoadingBar'

const LayoutPublic = () => {
  const { loading, error } = useProducts()

  return (
    <>
      <TopBar />
      <Navbar />
      {loading ? (
        <LoadingBar />
      ) : error ? (
        <p className="text-center mt-5">{error}</p>
      ) : (
        <Outlet />
      )}

      <Footer />
    </>
  )
}

export default LayoutPublic
