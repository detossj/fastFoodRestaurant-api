import React from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Subscription = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    
    MySwal.fire({
      title: '¡Ya casi es tuyo!',
      html: 'Hemos enviado un enlace a tu correo para <b>activar tu cuenta</b> y reclamar tu descuento.',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png', 
      imageWidth: 100,
      imageAlt: 'Hamburguesa',
      confirmButtonText: '¡Entendido!',
      confirmButtonColor: 'rgb(249, 124, 47)',
      backdrop: `
        rgba(0,0,123,0.1)
        url("/images/confetti.gif") 
        left top
        no-repeat
      `
    });
  }

  return (
    <div className="py-5" style={{ background: "#fff6ee" }}>
      <div className="container text-center">
        
        <h3 className="text-center mb-4">
          ¿No tienes cuenta? ¡Créate una ahora!
        </h3>
        
        <p className="mb-4 mx-auto" >
          Únete al club y acumula puntos con cada pedido. 
          ¡Tu primera hamburguesa podría salirte <strong>gratis</strong>!
        </p>

        <form 
          className="d-flex justify-content-center gap-2 flex-wrap"
          onSubmit={handleRegister}
        >
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu correo para empezar"
            required
            style={{
              maxWidth: "360px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid #e0e0e0"
            }}
          />

          <button 
            type="submit" 
            className="btn text-white shadow-sm"
            style={{
              background: "rgb(249, 124, 47)",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "bold",
              border: "none",
              transition: "transform 0.2s"
            }}

            onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            Crear mi cuenta
          </button>
        </form>

        <div className="mt-3">
          <small style={{ color: "#888" }}>
            ¿Ya tienes cuenta? <a href="/login" style={{ color: "rgb(249, 124, 47)", fontWeight: "bold" }}>Inicia sesión aquí</a>
          </small>
        </div>

      </div>
    </div>
  );
};

export default Subscription;