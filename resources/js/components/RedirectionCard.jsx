import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RedirectionCard = () => {
  const navigate = useNavigate();
  // El estado se mantiene para controlar el tiempo, aunque no se muestre
  const [countdown, setCountdown] = useState(5); 
  const destination = '/success'; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      navigate(destination);
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="container d-flex justify-content-center my-5">
      <div 
        className="card shadow-lg border-light p-5 text-center w-100 rounded-4" 
        style={{ maxWidth: '450px' }}
      >
        
        <div className="d-flex justify-content-center mb-4">
          <div 
            className="p-3 rounded-circle d-flex align-items-center justify-content-center"
            style={{ backgroundColor: 'rgba(255, 122, 0, 0.1)' }}
          >
            <Loader2 
                className="spin-animation" 
                size={64} 
                style={{ color: '#ff7a00' }} 
            />
          </div>
        </div>

        <h2 className="fw-bold text-dark mb-3">Redirigiendo...</h2>
        
        <p className="text-secondary mb-0">
          Estamos procesando tus datos. Serás redirigido automáticamente en breve.
        </p>

      </div>

      {/* Estilos CSS Inline para la animación de rotación */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .spin-animation {
            animation: spin 2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default RedirectionCard;