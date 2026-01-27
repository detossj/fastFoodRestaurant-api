import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, Home, RotateCcw } from 'lucide-react';


const ErrorCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-center my-5">
      
      <div className="card shadow-lg border-light p-4 text-center w-100 rounded-4" style={{ maxWidth: '450px' }}>

        <div className="d-flex justify-content-center mb-4">
          <div className="bg-danger bg-opacity-10 p-3 rounded-circle d-flex align-items-center justify-content-center">
            <XCircle className="text-danger pulse-animation" size={64} />
          </div>
        </div>


        <h2 className="fw-bold text-dark mb-2">¡Pago Fallido!</h2>
        <p className="text-secondary mb-2">
          Hubo un problema al procesar tu transacción.
        </p>
        <p className="text-muted small mb-4">
          No te preocupes, no se ha realizado ningún cargo a tu cuenta.
        </p>

        <div className="d-grid gap-3">

            <button 
                onClick={() => navigate('/checkout')}
                className="cart-pay-btn fw-bold d-flex align-items-center justify-content-center gap-2 py-2 shadow-sm"
            >
                <RotateCcw size={20} />
                Intentar Nuevamente
            </button>

            <button 
                onClick={() => navigate('/')}
                className="cart-pay-btn border fw-semibold d-flex align-items-center justify-content-center gap-2 py-2"
                style={{ backgroundColor: 'gray' }}
            >
                <Home size={20} />
                Volver al Inicio
            </button>
        </div>

      </div>


    </div>
  );
};

export default ErrorCard;