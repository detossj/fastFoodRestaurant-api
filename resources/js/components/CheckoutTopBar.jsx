import React from 'react'
import logo from "../../assets/images/logo.webp"
import { NavLink } from "react-router-dom"

const CheckoutTopBar = () => {
  return (
    <div className="py-2" style={{ borderBottom: "1px solid #e5e5e5" }}>
      <div className="container d-flex justify-content-center align-items-center">

        <NavLink to="/">
          <img src={logo} alt="Logo" style={{ height: "70px" }} />
        </NavLink>
        
      </div>
    </div>
  )
}

export default CheckoutTopBar