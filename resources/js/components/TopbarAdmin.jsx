import React from "react"
import logo from "../../assets/images/logo.webp"
import "./TopBar.css"
import { NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const TopBarAdmin = () => {
  const { user, logout } = useAuth()
  const location = useLocation()

  const activeAuthPaths = ["/login", "/register"]

  const isAuthActive = activeAuthPaths.includes(location.pathname)

  return (
    <div className="py-2" style={{ borderBottom: "1px solid #e5e5e5" }}>
      <div className="container d-flex justify-content-between align-items-center">

        <NavLink to="/admin">
          <img src={logo} alt="Logo" style={{ height: "70px" }} />
        </NavLink>

        <div className="d-flex align-items-center gap-4">

          {user ? (
            <div className="d-flex align-items-center gap-2">

              <span className="topbar-item">
                <i className="fa-solid fa-user me-1"></i> {user.name}
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
              className={isAuthActive ? "topbar-item active" : "topbar-item"}
            >
              <i className="fa-solid fa-user me-1"></i> INGRESAR
            </NavLink>
          )}


        </div>
      </div>
    </div>
  )
}

export default TopBarAdmin
