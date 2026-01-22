import React from 'react'
import CheckoutTopBar from '../components/CheckoutTopBar'

const Checkout = () => {
  return (
    <>
      <CheckoutTopBar />

      <div className="container py-5">
        <div className="row g-4">

          <div className="col-8">
            
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Retiro o Delivery</h5>

              </div>
            </div>

            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Datos del cliente</h5>

              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Método de pago</h5>
              </div>
            </div>

          </div>


          <div className="col-4">
            <div className="card shadow-sm position-sticky" style={{ top: "90px" }}>
              <div className="card-body">
                <h5 className="fw-bold mb-3">Resumen</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Checkout
