import React, { useState } from 'react'
import CheckoutTopBar from '../components/CheckoutTopBar'
import { CreditCard, Banknote, User } from 'lucide-react'
import PaymentMethodCard from '../components/PaymentMethodCard';
import AbstractCard from '../components/AbstractCard';


const Checkout = () => {

  const [tipoEntrega, setTipoEntrega] = useState('delivery'); 
  const [metodoPago, setMetodoPago] = useState('tarjeta')

  const costoEnvio = tipoEntrega === 'delivery' ? 2000 : 0;

  return (
    <>
      <CheckoutTopBar />

      <div className="container py-5">
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
                    <input type="text" className="form-control" placeholder="Juan Perez" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Correo</label>
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
                            <div className="fw-bold">Efectivo en tienda o entrega</div>
                            <div className="small text-muted">Pagas al recibir tu pedido</div>
                        </div>
                    </div>
                </div>

              </div>
            </div>

          </div>

          <AbstractCard costoEnvio={costoEnvio} tipoEntrega={tipoEntrega}/>

        </div>
      </div>
    </>
  )
}

export default Checkout