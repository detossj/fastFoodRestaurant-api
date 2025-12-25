import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthUser from './AuthUser'

const PublicRoutes = () => {
  const { getToken, getRol } = AuthUser()

  if(getToken()) {
    // Redirige según el rol
    const rol = getRol()
    if(rol === 'admin') {
        return <Navigate to="/admin" />
    } 
    else {
        return <Navigate to="/" />
    }
  }

  return <Outlet />
}

export default PublicRoutes
