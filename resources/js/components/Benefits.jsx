import React from 'react';
import { FaMotorcycle, FaStore, FaShieldAlt, FaStar } from "react-icons/fa";
import './Benefits.css'; 

const Benefits = () => {
  const items = [
    { icon: <FaMotorcycle className="icon-responsive" color='rgb(249, 124, 47)' />, title: "Delivery rápido", text: "Recibe tu pedido en minutos." },
    { icon: <FaStore className="icon-responsive" color='rgb(249, 124, 47)' />, title: "Retiro en tienda", text: "Pasa a buscar tu pedido sin esperas." },
    { icon: <FaShieldAlt className="icon-responsive" color='rgb(249, 124, 47)' />, title: "Pagos seguros", text: "Aceptamos tarjetas y billeteras digitales." },
    { icon: <FaStar className="icon-responsive" color='rgb(249, 124, 47)' />, title: "Calidad", text: "Ingredientes frescos y chefs expertos." },
  ];

  return (
    <div className="py-5 mt-5 px-2 px-md-0" style={{ background: "rgb(240, 240, 240)" }}>
      <div className="container my-md-5" >
        <h3 className="text-center mb-4">¿Por qué elegirnos?</h3>
        <div className="row text-center g-3 g-md-4">
          {items.map((item, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="p-3 p-md-4 shadow-sm bg-white rounded-4 h-100 d-flex flex-column align-items-center">
                <div className="text-warning mb-3">
                  {item.icon}
                </div>
                <h6 className="fw-bold px-1 px-md-3 title-responsive" style={{ color: "black" }}>
                  {item.title}
                </h6>
                <p className="mb-0 text-responsive" style={{ color: "#555" }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Benefits;
