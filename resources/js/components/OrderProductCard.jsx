import React from 'react'
import Config from '../Config';
import './OrderProductCard.css';

const OrderProductCard = ({ item, type }) => {
  const data = type === 'product' ? item.product : item.promotion;

  return (
    <div className="mini-product-card">
      <img 
        src={`${Config.API_BASE_URL}/storage${data.image_url}`} 
        alt={data.name} 
      />
      <div className="mini-info">
        <p className="mini-name">{data.name}</p>
        <p className="mini-qty">x{item.quantity} — <strong>${Math.trunc(item.price)}</strong></p>
      </div>
    </div>
  );
};

export default OrderProductCard;
