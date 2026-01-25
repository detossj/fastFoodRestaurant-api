import React from 'react'
import { CreditCard, Banknote } from 'lucide-react'

const PaymentMethodCard = ({metodoPago, setMetodoPago}) => {
    return (
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

  )
}

export default PaymentMethodCard