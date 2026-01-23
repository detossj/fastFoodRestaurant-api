import React, { useState } from 'react'
import CheckoutTopBar from '../components/CheckoutTopBar'
import { CreditCard, Banknote, User, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext';
import PaymentMethodCard from '../components/PaymentMethodCard';

const Checkout = () => {

  const [tipoEntrega, setTipoEntrega] = useState('delivery'); 
  const [metodoPago, setMetodoPago] = useState('tarjeta')
  
  const { cart, total: subtotal} = useCart()

  const costoEnvio = tipoEntrega === 'delivery' ? 2000 : 0;
  const total = subtotal + costoEnvio;

  const formatMoney = (amount) => {
    return "$" + amount.toLocaleString('es-CL');
  };

  return (
    <>
      <CheckoutTopBar />

      <div className="container py-5 font-montserrat">
        <div className="row g-4">

          <div className="col-lg-8">
            
            <PaymentMethodCard tipoEntrega={tipoEntrega} setTipoEntrega={setTipoEntrega}/>


            <div className="card shadow-sm mb-4 border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <User size={20} color="#ff7a00" />
                  Datos del cliente
                </h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Nombre</label>
                    <input type="text" className="form-control" placeholder="Juan" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Apellido</label>
                    <input type="text" className="form-control" placeholder="Pérez" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Email</label>
                    <input type="email" className="form-control" placeholder="juan@ejemplo.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Teléfono</label>
                    <input type="tel" className="form-control" placeholder="+56 9 1234 5678" />
                  </div>
                </div>
              </div>
            </div>


            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                  <CreditCard size={20} color="#ff7a00" />
                  Método de pago
                </h5>
                
                <div className="d-flex flex-column gap-2">
                    <div className={`border rounded p-3 cursor-pointer d-flex align-items-center gap-3 ${metodoPago === 'tarjeta' ? 'border-primary bg-light' : ''}`} onClick={() => setMetodoPago('tarjeta')}>
                        <input type="radio" name="pago" checked={metodoPago === 'tarjeta'} onChange={() => setMetodoPago('tarjeta')} />
                        <CreditCard size={24} className="text-dark"/>
                        <div>
                            <div className="fw-bold">Tarjeta de Crédito / Débito</div>
                            <div className="small text-muted">WebPay, OnePay</div>
                        </div>
                    </div>

                    <div className={`border rounded p-3 cursor-pointer d-flex align-items-center gap-3 ${metodoPago === 'efectivo' ? 'border-primary bg-light' : ''}`} onClick={() => setMetodoPago('efectivo')}>
                        <input type="radio" name="pago" checked={metodoPago === 'efectivo'} onChange={() => setMetodoPago('efectivo')} />
                        <Banknote size={24} className="text-success"/>
                        <div>
                            <div className="fw-bold">Efectivo contra entrega</div>
                            <div className="small text-muted">Pagas al recibir tu pedido</div>
                        </div>
                    </div>
                </div>

              </div>
            </div>

          </div>

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

        </div>
      </div>
    </>
  )
}

export default Checkout