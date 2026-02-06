import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';
import logo from '../../assets/images/logo.webp';


const NavbarAdmin = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Funcion para que la navbar quede pegada arriba al scrollear
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // si baja más de 50px activa el logo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-3 navbar-wrapper" style={{borderBottom: "1px solid #e5e5e5"}}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">

          {scrolled && (
              <img 
                style={{ height: '50px', cursor: 'pointer'}}
                src={logo} 
                alt="Logo"
                className="navbar-logo"
              />
            )}

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className={`navbar-nav ${scrolled ? "with-logo" : ""}`}>
                <li className="nav-item">
                  <NavLink 
                    to="/admin" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    LISTAR PRODUCTO O PROMOCION
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/admin" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    CREAR PRODUCTO O PROMOCION
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/admin" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    EDITAR PRODUCTO O PROMOCION
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/admin" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    ELIMINAR PRODUCTO O PROMOCION
                  </NavLink>
                </li>

              </ul>
              
            </div>

          </div>
        </nav>
      </div>

    </div>

  )
}

export default NavbarAdmin
