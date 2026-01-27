import React from 'react';
import { CheckCircle, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuccessCard = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      
      <div className="card shadow-lg border-light p-4 text-center w-100 rounded-4" style={{ maxWidth: '450px' }}>
        
        <div className="d-flex justify-content-center mb-4">

          <div className="bg-success bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center">
            <CheckCircle className="text-success" size={64} />
          </div>
        </div>

        <h2 className="fw-bold text-dark mb-2">¡Pago Realizado!</h2>
        <p className="text-secondary mb-5">
          Tu transacción ha sido procesada exitosamente.
        </p>

        <p className="text-sm text-gray-400 mb-8">
          Tu pedido estará listo en uno minutos.
        </p>

        <p className="text-muted small mb-4">
          
        </p>
        <button 
            onClick={handleBackToHome}
            className="cart-pay-btn fw-bold d-flex align-items-center justify-content-center gap-2 py-2 shadow-sm"
        >
          <Home size={20} />
          Volver al Inicio
        </button>


      </div>
    </div>
  );
};

export default SuccessCard;