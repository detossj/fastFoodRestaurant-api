import React from 'react'
import './StoreCard.css';
import Config from '../Config'
import { MapPin, Clock, Phone } from 'lucide-react'; 

const StoreCard = ({ store }) => {
  return (
    <div className="store-card shadow rounded">
      
      <div className="store-img-wrapper">
        <img 
          src={`${Config.API_BASE_URL}/storage${store.image_url}`}
          alt={store.direction}
          className="store-img"
          loading='lazy'
        />
        <span className="store-badge">Abierto</span>
      </div>

      <div className="store-info">
        <h3 className="store-title">{store.direction}</h3>
        
        <div className="store-detail-item">
          <MapPin className="icon" size={18} />
          <span>{store.sub_direction ?? 'Dirección no disponible'}</span>
        </div>

        <div className="store-detail-item">
          <Clock className="icon" size={18} />
          <span>{store.schedule ?? 'Horario a consultar'}</span>
        </div>

        <div className="store-detail-item">
          <Phone className="icon" size={18} />
          <span>{store.phone ?? 'Teléfono no disponible'}</span>
        </div>

        <button className="btn-visit mt-3">
          Ver Mapa
        </button>
      </div>

    </div>
  )
}

export default StoreCard