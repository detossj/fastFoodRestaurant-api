import React from 'react'
import './OrderCard.css';
import OrderProductCard from './OrderProductCard';

const OrderCard = ({ order }) => {

  return (
    <div className="order-card shadow">

      <div className="order-header">
        <h5 className="fw-bold text-center">Pedido #{order.id}</h5>
        <span className="order-status">{order.status}</span>
      </div>

      <div className="order-products">
        {order.order_items.map(item => (
          <OrderProductCard
            key={`product-${item.id}`}
            item={item}
            type="product"
          />
        ))}

        {order.order_promotion_items.map(item => (
          <OrderProductCard
            key={`promo-${item.id}`}
            item={item}
            type="promotion"
          />
        ))}
      </div>

      <div className="order-footer">
        <p>Método de pago: <strong>{order.payment_method}</strong></p>
        <p>Entrega: <strong>{order.delivery_type}</strong></p>
        <h5>Total: ${Math.trunc(order.total)}</h5>
        <small>{new Date(order.created_at).toLocaleString('es-CL')}</small>
      </div>

    </div>
  );
};

export default OrderCard;
