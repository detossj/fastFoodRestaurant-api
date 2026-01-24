import React from 'react'
import { useCart } from '../context/CartContext'
import { ShoppingBag } from 'lucide-react'


const AbstractCard = ({costoEnvio, tipoEntrega}) => {

    const { cart, total: subtotal} = useCart()
    const total = subtotal + costoEnvio;

    const formatMoney = (amount) => {
      return "$" + amount.toLocaleString('es-CL');
    };

  return (
    <div className="col-lg-4">
        <div className="card shadow-sm position-sticky border-0" style={{ top: "90px" }}>
            <div className="card-body p-4">
            <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <ShoppingBag size={20} color="#ff7a00" />
                Resumen de compra
            </h5>
            

            <div className="d-flex flex-column gap-3 mb-4 max-h-[300px] overflow-auto">
                {cart.map((product) => (
                <div key={product.id} className="d-flex justify-content-between align-items-start pb-2 border-bottom">
                    <div>
                        <div className="fw-bold text-sm">{product.quantity}x {product.name}</div>
                        <div className="text-muted small">Detalles del item...</div>
                    </div>
                    <div className="fw-bold text-dark">{formatMoney(product.price * product.quantity)}</div>
                </div>
                ))}
            </div>


            <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span className="fw-bold">{formatMoney(subtotal)}</span>
            </div>
            
            <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Envío ({tipoEntrega})</span>
                <span className={`fw-bold ${costoEnvio === 0 ? 'text-success' : ''}`}>
                {costoEnvio === 0 ? 'GRATIS' : formatMoney(costoEnvio)}
                </span>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-5">Total</span>
                <span className="fw-bold fs-4" textColor="#ff7a00">{formatMoney(total)}</span>
            </div>

            <button className="cart-pay-btn" >
                CONFIRMAR PEDIDO
            </button>
                    
            <p className="text-center text-muted small mt-3">
                Tus datos están protegidos por SSL.
            </p>

            </div>
        </div>
    </div>
  )
}

export default AbstractCard