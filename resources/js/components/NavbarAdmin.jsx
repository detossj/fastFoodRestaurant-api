import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse } from 'bootstrap'; 
import './NavBar.css';
import logo from '../../assets/images/logo.webp';


const NavbarAdmin = () => {

  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => {
    // Funcion para que la navbar quede pegada arriba al scrollear
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // si baja más de 50px activa el logo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect para detectar clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el menú existe, el clic no fue dentro del menú, y tampoco fue en el botón de hamburguesa
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        togglerRef.current && !togglerRef.current.contains(event.target)
      ) {
        // Verificamos si el menú está abierto (tiene la clase 'show' de Bootstrap)
        if (menuRef.current.classList.contains('show')) {
          closeMenu();
        }
      }
    };

    // Escuchamos los clics en todo el documento
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Función para cerrar el menú programáticamente
  const closeMenu = () => {
    if (menuRef.current) {
      const bsCollapse = new Collapse(menuRef.current, { toggle: false });
      bsCollapse.hide();
    }
  };

  return (
    <div className="p-md-3 navbar-wrapper" style={{borderBottom: "1px solid #e5e5e5"}}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid px-0">

            <div className="navbar-brand m-0 p-0">
              {scrolled && (
                <img 
                  style={{ height: '50px', cursor: 'pointer'}}
                  src={logo} 
                  alt="Logo"
                  className="navbar-logo"
                />
              )}
            </div>

            <div className="d-flex align-items-center gap-3 order-lg-last">
              <button 
                ref={togglerRef} 
                className="navbar-toggler border-0 px-1" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDropdownAdmin" 
                aria-controls="navbarNavDropdownAdmin" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarNavDropdownAdmin" ref={menuRef}>
              
              <ul className={`navbar-nav mx-auto text-center gap-2 gap-lg-1 mt-4 mt-lg-0 ${scrolled ? "with-logo" : ""}`}>
                <li className="nav-item">
                  <NavLink 
                    to="/admin" 
                    onClick={closeMenu}
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                    style={{ fontWeight: "bold" }}
                  >
                    GESTIONAR PRODUCTOS O PROMOCIONES
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
