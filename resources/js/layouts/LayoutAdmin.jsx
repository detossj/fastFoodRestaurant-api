import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'
import TopBarAdmin from '../components/TopbarAdmin'

const LayoutAdmin = () => {

  return (
    <>
    <TopBarAdmin/>
    <NavbarAdmin/>
      <Outlet/>
  </>
  )
}

export default LayoutAdmin