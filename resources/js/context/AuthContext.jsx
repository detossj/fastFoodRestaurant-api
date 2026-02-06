import React from "react"
import { createContext, useContext, useEffect, useState } from "react"


const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [rol, setRol] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    const storedUser = localStorage.getItem("user")
    const storedRol = localStorage.getItem("rol")

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
      if(storedRol) setRol(JSON.parse(storedRol))
    }

    setLoading(false)
  }, [])

  const login = (user, token, rol) => {
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("rol", JSON.stringify(rol))

    setToken(token)
    setUser(user)
    setRol(rol)
  }

  const updateUser = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const logout = () => {
    localStorage.clear()
    setToken(null)
    setUser(null)
    setRol(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, rol, login, logout, updateUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
