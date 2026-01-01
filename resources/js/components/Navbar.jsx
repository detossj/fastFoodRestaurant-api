import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';
import logo from '../../assets/images/logo.webp';
import { FaCartShopping } from "react-icons/fa6";
import Cart from './Cart';


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
                    to="/" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    INICIO
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/promociones" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    PROMOCIONES
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/pizzas" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    PIZZAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/hamburguesas" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    HAMBURGUESAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/acompanamientos" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    ACOMPAÑAMIENTOS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/bebidas" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    BEBIDAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/postres" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    POSTRES
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/extras" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    EXTRAS
                  </NavLink>
                </li>

              </ul>

              <button className="cart-button ms-auto" onClick={(e)=>showCart(e)}>
                <FaCartShopping size={22} />
                <span className="cart-count">0</span>
              </button>
              
            </div>

          </div>
        </nav>
      </div>

      {cart && <Cart onClose={() => setCart(false)} />}
    </div>

  )
}

export default Navbar
