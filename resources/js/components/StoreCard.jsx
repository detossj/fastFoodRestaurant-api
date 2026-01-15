import React from 'react'
import './StoreCard.css';
import Config from '../Config'

const StoreCard = ({ store }) => {
  return (
    <div className="store-card shadow rounded p-3">

      <div className="store-info mt-3">
          <h1 className="fw-bold text-center">{store.direction}</h1>
          <h4 className="text-center mt-3">
            {store.sub_direction ?? 'Sin descripción disponible.'}
          </h4>
          <p className="text-center">
            {store.schedule ?? 'Sin descripción disponible.'}
          </p>
          <p className="text-center">
            {store.phone ?? 'Sin descripción disponible.'}
          </p>
          
      </div>

      <div className="store-img-wrapper">
        <img 
          src={`${Config.API_BASE_URL}/storage${store.image_url}`}
          alt={store.direction}
          className="store-img"
          loading='lazy'
          decoding="async"
          width="260"
          height="260"
        />
      </div>

    </div>

  )
}

export default StoreCard