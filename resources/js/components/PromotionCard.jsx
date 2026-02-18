import React from 'react'
import './PromotionCard.css';
import Config from '../Config'

const PromotionCard = ({ promotion, onClick }) => {
  return (
    <div className="promotion-card shadow h-100">

      <div className="promotion-img-wrapper mb-3">
        <img 
          src={`${Config.API_BASE_URL}/storage${promotion.image_url}`}
          alt={promotion.name}
          className="promotion-img"
          loading='lazy'
          decoding="async"
        />
      </div>

      <div className="promotion-info mt-3">
        <h5 className="fw-bold text-center">{promotion.name}</h5>

        <p className="text-muted text-center small mt-3">
          {promotion.description ?? 'Sin descripción disponible.'}
        </p>
      </div>

      <div className="product-bottom mb-3"  onClick={onClick}>
        <button className="add-cart-btn-card">
          AGREGAR <span className="price">${Math.trunc(promotion.price)}</span>
        </button>
      </div>

    </div>
  )
}

export default PromotionCard
