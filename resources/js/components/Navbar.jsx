import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';
import logo from '../../assets/images/logo.webp';
import { FaCartShopping } from "react-icons/fa6";
import Cart from './Cart';
import { useCart } from '../context/CartContext';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState(false)

  useEffect(() => {
    // Funcion para que la navbar quede pegada arriba al scrollear
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // si baja más de 50px activa el logo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showCart = (e) => {
    e.preventDefault();
    setCart(true);
  };

  const { totalItems } = useCart()

  return (
    <div className="p-3 navbar-wrapper">
      <div className="container">
        {/* navbar-expand-lg le dice que en pantallas grandes (lg) expanda el menú, en menores lo colapse */}
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

            {/* GRUPO DERECHO EN MÓVIL: Carrito + Botón Hamburguesa */}
            <div className="d-flex align-items-center gap-3 order-lg-last">
              
              <button className="cart-button" onClick={(e)=>showCart(e)}>
                <FaCartShopping size={22} />
                <span className="cart-count">{totalItems}</span>
              </button>

              {/* Botón Hamburguesa nativo de Bootstrap */}
              <button 
                className="navbar-toggler border-0 px-1" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

            </div>

            {/* MENÚ COLAPSABLE (Centro) */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              
              <ul className={`navbar-nav mx-auto text-center gap-2 gap-lg-1 mt-4 mt-lg-0 ${scrolled ? "with-logo" : ""}`}>
                
                <li className="nav-item">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                  >
                    INICIO
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/promociones" 
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                  >
                    PROMOCIONES
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/pizzas" 
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                  >
                    PIZZAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/hamburguesas" 
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                  >
                    HAMBURGUESAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/acompanamientos" 
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                  >
                    ACOMPAÑAMIENTOS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/bebidas" 
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                  >
                    BEBIDAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/postres" 
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                  >
                    POSTRES
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/extras" 
                    className={({ isActive }) => isActive ? "navbar-item active d-inline-block" : "navbar-item d-inline-block"}
                  >
                    EXTRAS
                  </NavLink>
                </li>

              </ul>
            </div>

          </div>
        </nav>
      </div>

      {cart && <Cart onClose={() => setCart(false)} />}
    </div>
  )
}

export default Navbar