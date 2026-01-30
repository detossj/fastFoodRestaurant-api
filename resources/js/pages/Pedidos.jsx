import React from 'react'
import OrderSectionHeader from '../components/OrderSectionHeader'
import Config from '../Config';

const Pedidos = () => {
  const Pedido = async () => {

    try {
      const response = await Config.getOrders();
      if (response.status === 201 || response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error al obtener pedidos:", error.response?.data);

    }

  }

  return (
    <>
      <OrderSectionHeader/>

      <button onClick={() => Pedido()}>Crear Pedido</button>
    </>
  )
}

export default Pedidos