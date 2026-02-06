import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const ProtectedRoutes = ({ role }) => {
  const { token, rol, loading } = useAuth()

  if (loading) {
    return <div>Cargando...</div> 
  }

  if (!token) {
    return <Navigate to="/" replace />
  }

  if (role === "admin" && rol !== "admin") {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default ProtectedRoutes
