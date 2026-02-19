import React from "react"
import logo from "../../assets/images/logo.webp"
import "./TopBar.css"
import { NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Pizza, Store, User } from 'lucide-react';

const TopBar = () => {
  const { user, logout } = useAuth()
  const location = useLocation()

  const activeMenuPaths = [
    "/",
    "/acompanamientos",
    "/bebidas",
    "/pizzas",
    "/hamburguesas",
    "/postres",
    "/extras",
    "/promociones"
  ]

  const activeAuthPaths = ["/login", "/register"]

  const isMenuActive = activeMenuPaths.includes(location.pathname)
  const isAuthActive = activeAuthPaths.includes(location.pathname)

  return (
    <div className="py-2" style={{ borderBottom: "1px solid #e5e5e5" }}>
      <div className="container d-flex flex-column flex-md-row justify-content-md-between align-items-center gap-3 gap-md-0">

        <NavLink to="/">
          <img src={logo} alt="Logo" style={{ height: "70px" }} />
        </NavLink>

        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4">

          <NavLink
            to="/"
            className={isMenuActive ? "topbar-item active d-flex align-items-center gap-2" : "topbar-item d-flex align-items-center gap-2"}
          >
            <Pizza /> MENÚ
          </NavLink>

          <NavLink
            to="/locales"
            className={({ isActive }) =>
              isActive ? "topbar-item active d-flex align-items-center gap-2" : "topbar-item d-flex align-items-center gap-2"
            }
          >
            <Store /> LOCALES
          </NavLink>


          {user ? (
            <div className="d-flex align-items-center gap-2">

              <span className="topbar-item d-flex align-items-center gap-2">
                <User />{user.name}
              </span>

              <div className="dropdown">
                <a
                  href="#"
                  className="topbar-item dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                </a>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <NavLink className="dropdown-item" to="/perfil">
                      Perfil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/pedidos">
                      Pedidos
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={logout}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          ) : (
            <NavLink
              to="/login"
              className={isAuthActive ? "topbar-item active d-flex align-items-center gap-2" : "topbar-item d-flex align-items-center gap-2"}
            >
              <User /> INGRESAR
            </NavLink>
          )}


        </div>
      </div>
    </div>
  )
}

export default TopBar
