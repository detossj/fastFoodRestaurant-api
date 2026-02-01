import React from 'react'
import Config from '../Config';
import './OrderProductCard.css';

const OrderProductCard = ({ item, type }) => {

  const data = type === 'product' ? item.product : item.promotion;

  return (
    <div className="order-product-card">

      <div className="order-product-img-wrapper">
        <img
          src={`${Config.API_BASE_URL}/storage${data.image_url}`}
          alt={data.name}
          className="order-product-img"
          loading="lazy"
        />
      </div>

      <div className="order-product-info">
        <h6 className="fw-bold text-center">{data.name}</h6>

        <p className="text-muted small text-center">
          Cantidad: {item.quantity}
        </p>

        <p className="order-product-price text-center">
          ${Math.trunc(item.price)}
        </p>
      </div>

    </div>
  );
};

export default OrderProductCard;
