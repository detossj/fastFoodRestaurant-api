import React from 'react';
import './OrderCard.css';
import OrderProductCard from './OrderProductCard';

const OrderCard = ({ order }) => {
  const formatCurrency = (val) => 
    new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

  return (
    <div className="order-card-v2 shadow">

      <div className="order-v2-header">
        <div className="order-v2-id-group">
          <h2>Pedido #{order.id}</h2>
          <p className="order-v2-date">{new Date(order.created_at).toLocaleString('es-CL')}</p>
        </div>
        <div className={`order-v2-status-pill ${order.status.toLowerCase().replace(' ', '-')}`}>
          {order.status}
        </div>
      </div>

      <div className="order-v2-section">
        <h4 className="order-v2-title">Resumen de Productos</h4>
        <div className="order-v2-products-list">
          {order.order_items.map(item => (
            <OrderProductCard key={`p-${item.id}`} item={item} type="product" />
          ))}
          {order.order_promotion_items.map(item => (
            <OrderProductCard key={`pr-${item.id}`} item={item} type="promotion" />
          ))}
        </div>
      </div>

      <div className="order-v2-info-grid">
        <div className="info-block">
          <label>Dirección de Envío</label>
          <p><strong>{order.delivery_address}</strong></p>
        </div>
        <div className="info-block">
          <label>Método de Entrega</label>
          <p>{order.delivery_type}</p>
        </div>
        <div className="info-block">
          <label>Forma de Pago</label>
          <p>{order.payment_method}</p>
        </div>
      </div>

      <div className="order-v2-footer">
        <div className="footer-line">
          <span>Subtotal</span>
          <span>{formatCurrency(order.subtotal)}</span>
        </div>
        <div className="footer-line">
          <span>Costo de Envío</span>
          <span>{formatCurrency(order.shipping_cost)}</span>
        </div>
        <div className="footer-line total-big">
          <span>Total Pagado</span>
          <span>{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;