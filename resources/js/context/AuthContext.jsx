import React from "react"
import { createContext, useContext, useEffect, useState } from "react"


const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [rol, setRol] = useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")
    const storedRol = localStorage.getItem("rol")

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
      setRol(JSON.parse(storedRol))
    }
  }, [])

  const login = (user, token, rol) => {
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("rol", JSON.stringify(rol))

    setToken(token)
    setUser(user)
    setRol(rol)
  }

  const logout = () => {
    localStorage.clear()
    setToken(null)
    setUser(null)
    setRol(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, rol, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
