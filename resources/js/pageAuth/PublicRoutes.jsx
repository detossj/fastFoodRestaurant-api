import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PublicRoutes = () => {
  const { token, rol, loading } = useAuth()
  const location = useLocation()

  const authPages = ["/login", "/register"]

  if (loading) return null;

  if (token && authPages.includes(location.pathname)) {
    return <Navigate to={rol === "admin" ? "/admin" : "/"} replace />
  }

  return <Outlet />
}

export default PublicRoutes
