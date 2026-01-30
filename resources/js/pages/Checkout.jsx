import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext' // Importante
import CheckoutTopBar from '../components/CheckoutTopBar'
import AbstractCard from '../components/AbstractCard';
import CustomerDataCard from '../components/CustomerDataCard';
import DeliveryMethodCard from '../components/DeliveryMethodCard';
import PaymentMethodCard from '../components/PaymentMethodCard';
import Config from '../Config';



const Checkout = () => {
  const navigate = useNavigate();
  const { cart, total: subtotal, clearCart } = useCart();
  
  const [tipoEntrega, setTipoEntrega] = useState('delivery'); 
  const [metodoPago, setMetodoPago] = useState('debit_card'); 

  const costoEnvio = tipoEntrega === 'delivery' ? 2000 : 0;
  const totalFinal = subtotal + costoEnvio;

  const handleConfirmOrder = async () => {
    const orderData = {
      payment_method: metodoPago, 
      total: totalFinal,
      // Mapeamos el carrito para que Laravel entienda qué es producto y qué promoción
      items: cart.map(item => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        cartType: item.cartType 
      }))
    };

    try {
      const response = await Config.createOrder(orderData);
      if (response.status === 201 || response.status === 200) {
        clearCart();
        navigate('/redirection'); 
      }
    } catch (error) {
      console.error("Error al crear pedido:", error.response?.data);
      alert("Hubo un error al procesar tu pedido");
    }
  };

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
          
          <AbstractCard 
            costoEnvio={costoEnvio} 
            tipoEntrega={tipoEntrega} 
            onConfirm={handleConfirmOrder} 
          />
        </div>
      </div>
    </>
  )
}
export default Checkout