import React from "react";
import logo from '../../assets/images/logo.webp';
import './Footer.css'; 

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-papa py-5">
      <div className="container">
        
        <div className="row mb-4 gy-4 text-center text-md-start"> 
          
          <div className="col-12 col-md-4 col-lg-3">

            <img src={logo} alt="Logo Fast Food Restaurant" className="mb-3 logo-footer mx-auto mx-md-0 d-block" />
            <p className="text-muted mb-2">Síguenos en:</p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
              <a href="#" target="_blank" rel="noreferrer" className="social-icon text-dark" aria-label="Instagram" onClick={handleLinkClick}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-icon text-dark" aria-label="Facebook" onClick={handleLinkClick}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-icon text-dark" aria-label="TikTok" onClick={handleLinkClick}>
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <h5 className="fw-bold mb-3">FAST FOOD</h5>
            <ul className="list-unstyled footer-list d-flex flex-column align-items-center align-items-md-start gap-2">
              <li><a href="#" className="footer-link" onClick={handleLinkClick}>Acerca de nosotros</a></li>
              <li><a href="#" className="footer-link" onClick={handleLinkClick}>Ingredientes</a></li>
              <li><a href="#s" className="footer-link" onClick={handleLinkClick}>Nuestros locales</a></li>
              <li><a href="#" className="footer-link" onClick={handleLinkClick}>Blog</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <h5 className="fw-bold mb-3">AYUDA</h5>
            <ul className="list-unstyled footer-list d-flex flex-column align-items-center align-items-md-start gap-2">
              <li><a href="#" className="footer-link" onClick={handleLinkClick}>Preguntas frecuentes</a></li>
              <li><a href="#" className="footer-link" onClick={handleLinkClick}>Contacto</a></li>
              <li className="text-muted mt-2">
                <i className="fas fa-phone-alt me-2"></i>+56 111 111 1111
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <h5 className="fw-bold mb-3">LEGAL</h5>
            <ul className="list-unstyled footer-list d-flex flex-column align-items-center align-items-md-start gap-2">
              <li><a href="#" className="footer-link" onClick={handleLinkClick}>Términos y Condiciones</a></li>
              <li><a href="#" className="footer-link" onClick={handleLinkClick}>Política de privacidad</a></li>
              <li><a href="#" className="footer-link" onClick={handleLinkClick}>Tratamiento de datos</a></li>
            </ul>
          </div>

        </div>

       
        <div className="text-center pt-4 border-top px-2">
          <p className="mb-0 text-muted small text-wrap">
            © {currentYear} Fast Food Restaurant. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;