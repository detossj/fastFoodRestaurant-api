import React from 'react'

const OrderCard = ({order}) => {
  return (
        <div className="store-card shadow rounded p-3">
    
          <div className="store-info mt-3">
              <h1 className="fw-bold text-center">{order.status}</h1>
              <h4 className="text-center mt-3">
                {order.total ?? 'Sin descripción disponible.'}
              </h4>
              <p className="text-center">
                {order.payment_method ?? 'Sin descripción disponible.'}
              </p>
              <p className="text-center">
                {order.created_at ?? 'Sin descripción disponible.'}
              </p>
              
          </div>
    
    
        </div>
  )
}

export default OrderCard