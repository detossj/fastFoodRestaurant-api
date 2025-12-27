import React from "react"
import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {


  const [token, setToken] = useState(
    JSON.parse(sessionStorage.getItem("token"))
  )
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  )
  const [rol, setRol] = useState(
    JSON.parse(sessionStorage.getItem("rol"))
  )

  const login = (user, token, rol) => {
    sessionStorage.setItem("token", JSON.stringify(token))
    sessionStorage.setItem("user", JSON.stringify(user))
    sessionStorage.setItem("rol", JSON.stringify(rol))

    setToken(token)
    setUser(user)
    setRol(rol)

  }

  const logout = () => {
    sessionStorage.clear()
    setToken(null)
    setUser(null)
    setRol(null)
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ token, user, rol, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
