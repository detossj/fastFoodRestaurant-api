import React from 'react'
import Config from '../Config'

const PromotionCard = ({ promotion }) => {
    return (
        <div className="product-card shadow rounded p-3">
  
        <div className="product-img-wrapper mb-3">
          <img 
            src={`${Config.API_BASE_URL}/storage/products${promotion.image_url}`}
            alt={promotion.name}
            className="product-img"
            loading='lazy'
            decoding="async"
            width="500px"
            height="260"
          />
        </div>
  
        <div className="product-info mt-2">
            <h5 className="fw-bold text-center">{promotion.name}</h5>
  
            <p className="text-muted text-center small">
              {promotion.description ?? 'Sin descripción disponible.'}
            </p>
        </div>
  
        <div className="product-bottom">
            <p className="product-price text-center fw-semibold">
              ${promotion.price}
            </p>
  
            <button className="btn btn-primary px-4" 
              style={{backgroundColor: "rgb(249, 124, 47)", borderColor: 'rgb(249, 124, 47)'}}
            >
              Agregar
            </button>
        </div>
  
      </div>
    )
}

export default PromotionCard