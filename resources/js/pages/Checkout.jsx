import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext' // Importante
import CheckoutTopBar from '../components/CheckoutTopBar'
import AbstractCard from '../components/AbstractCard';
import CustomerDataCard from '../components/CustomerDataCard';
import DeliveryMethodCard from '../components/DeliveryMethodCard';
import PaymentMethodCard from '../components/PaymentMethodCard';
import Config from '../Config';
import { useAuth } from '../context/AuthContext';



const Checkout = () => {
  const navigate = useNavigate();
  const { cart, total: subtotal, clearCart } = useCart();
  const { user } = useAuth()
  
  const [tipoEntrega, setTipoEntrega] = useState('Delivery'); 
  const [metodoPago, setMetodoPago] = useState('Tarjeta Debito'); 

  const [deliveryAddress, setDeliveryAddress] = useState('');

  useEffect(() => {
      if (tipoEntrega === 'Delivery' && user?.address) {
          setDeliveryAddress(user.address);
      }
  }, [user]);

  const costoEnvio = tipoEntrega === 'Delivery' ? 2000 : 0;
  const totalFinal = subtotal + costoEnvio;

  const handleConfirmOrder = async () => {
    const orderData = {
      payment_method: metodoPago, 
      total: totalFinal,
      subtotal: subtotal,
      shipping_cost: costoEnvio,
      delivery_type: tipoEntrega,
      delivery_address: deliveryAddress,
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
            <DeliveryMethodCard tipoEntrega={tipoEntrega} setTipoEntrega={setTipoEntrega} setDeliveryAddress={setDeliveryAddress}/>
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