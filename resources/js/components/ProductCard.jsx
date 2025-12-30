import React from 'react';
import './ProductCard.css';
import Config from '../Config';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card shadow rounded p-3"  onClick={onClick} >

      <div className="product-img-wrapper mb-3">
        <img 
          src={`${Config.API_BASE_URL}/storage/products${product.image_url}`}
          alt={product.name}
          className="product-img"
          loading='lazy'
          decoding="async"
          width="260"
          height="260"
        />
      </div>

      <div className="product-info mt-3">
          <h5 className="fw-bold text-center">{product.name}</h5>

          <p className="text-muted text-center small mt-3">
            {product.description ?? 'Sin descripción disponible.'}
          </p>
      </div>

      <div className="product-bottom">
        <button className="add-cart-btn-card">
          AGREGAR <span className="price">{product.price}</span>
        </button>
      </div>



    </div>

  );
};

export default ProductCard;
