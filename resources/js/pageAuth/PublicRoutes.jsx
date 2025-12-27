import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PublicRoutes = () => {
  const { token, rol } = useAuth()
  const location = useLocation()

  const authPages = ["/login", "/register"]

  if (token && authPages.includes(location.pathname)) {
    return <Navigate to={rol === "admin" ? "/admin" : "/"} replace />
  }

  return <Outlet />
}

export default PublicRoutes
