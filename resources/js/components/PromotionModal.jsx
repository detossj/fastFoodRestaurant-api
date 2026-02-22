import React, { useState } from 'react'
import './PromotionModal.css'
import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'

const PromotionModal = ({ promotion, close }) => {
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      ...promotion,
      cartType: 'promo'
    }, quantity) 
    toast.success("Promoción agregada al carrito")
    
    setTimeout(() => {
      close(false)
    }, 300);
  }

  const handleBgClick = (e) => {
    if (e.target.className === "promo_modal_bg") {
      close(false);
    }
  }

  const formattedPrice = Math.trunc(promotion.price).toLocaleString('es-CL');

  return (
    <div className="promo_modal_bg" onClick={handleBgClick}>
      <div className="promo_modal_content shadow">

        <button
          className="promo-close-btn-circle shadow-sm"
          onClick={() => close(false)}
          aria-label="Cerrar"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal_body">
          <img
            src={`storage/${promotion.image_url}`}
            alt={promotion.name}
            className="promotion-modal-img shadow-sm"
          />

          <h3 className="text-center mt-4 fw-bold text-dark">{promotion.name}</h3>
          <p className="text-center text-muted mt-2 mb-4 px-2" style={{ fontSize: '0.95rem' }}>
            {promotion.description}
          </p>

          <div className="promo-add-to-cart-container">

            <div className="promo-quantity-selector">
              <button
                className="promo-qty-btn"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                −
              </button>

              <span className="promo-qty-number">{quantity}</span>

              <button
                className="promo-qty-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button className="promo-add-cart-btn shadow-sm" onClick={handleAddToCart}>
              <span>AGREGAR</span> 
              <span className="promo-price">${formattedPrice}</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionModal