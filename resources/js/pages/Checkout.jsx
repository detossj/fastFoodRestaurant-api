import React, { useState } from 'react'
import CheckoutTopBar from '../components/CheckoutTopBar'
import AbstractCard from '../components/AbstractCard';
import CustomerDataCard from '../components/CustomerDataCard';
import DeliveryMethodCard from '../components/DeliveryMethodCard';
import PaymentMethodCard from '../components/PaymentMethodCard';



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
            
            <DeliveryMethodCard tipoEntrega={tipoEntrega} setTipoEntrega={setTipoEntrega}/>

            <CustomerDataCard />

            <PaymentMethodCard metodoPago={metodoPago} setMetodoPago={setMetodoPago}/>
 
          </div>

          <AbstractCard costoEnvio={costoEnvio} tipoEntrega={tipoEntrega}/>

        </div>
      </div>
    </>
  )
}

export default Checkout