import React from 'react'
import './PromotionCard.css';
import Config from '../Config'

const PromotionCard = ({ promotion }) => {
    return (
      <div className="promotion-card shadow rounded px-4 py-3 w-100">
        <div className="promotion-img-wrapper mb-3">
          <img 
            src={`${Config.API_BASE_URL}/storage/promotions${promotion.image_url}`}
            alt={promotion.name}
            className="promotion-img"
            loading='lazy'
            decoding="async"
          />
        </div>
  
        <div className="promotion-info mt-2">
            <h5 className="fw-bold text-center">{promotion.name}</h5>
  
            <p className="text-muted text-center small">
              {promotion.description ?? 'Sin descripción disponible.'}
            </p>
        </div>
  
        <div className="promotion-bottom">
            <p className="promotion-price text-center fw-semibold">
              ${promotion.price}
            </p>
  
            <button className="btn btn-primary px-4 promotion-button" >
              Agregar
            </button>
        </div>
  
      </div>
    )
}

export default PromotionCard