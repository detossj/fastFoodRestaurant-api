import React, { useState } from 'react'
import './PromotionModal.css'
import { useCart } from '../context/CartContext'

const PromotionModal = ({ promotion, close }) => {
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useCart()

  return (
    <div className="modal_bg">
      <div className="modal_content_promotion">

        <button
          className="close-btn-circle"
          onClick={() => close(false)}
          aria-label="Cerrar"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>


        <div className="modal_body">
          <img
            src={`storage/promotions/${promotion.image_url}`}
            alt={promotion.name}
            className="promotion-modal-img"
          />

          <h1 className="text-center mt-3">{promotion.name}</h1>
          <p className="text-center">{promotion.description}</p>

          <div className="add-to-cart-container">

          <div className="quantity-selector">
            <button
              className="qty-btn"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            >
              −
            </button>

            <span className="qty-number">{quantity}</span>

            <button
              className="qty-btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button className="add-cart-btn" onClick={() => addToCart(promotion)}>
            AGREGAR <span className="price">{promotion.price}</span>
          </button>

        </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionModal
