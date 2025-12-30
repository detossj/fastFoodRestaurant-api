import React, { useState } from 'react'
import './ProductModal.css'

const ProductModal = ({ product, close }) => {

  const [quantity, setQuantity] = useState(1)

  return (
    <div className="modal_bg">
      <div className="modal_content">
        <div className="modal_body">

          <img
            src={`storage/products/${product.image_url}`}
            alt={product.name}
            className="product-modal-img"
          />

          <h1 className="text-center mt-3">{product.name}</h1>
          <p className="text-center">{product.description}</p>

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

          <button className="add-cart-btn">
            AGREGAR <span className="price">{product.price}</span>
          </button>

        </div>


        </div>

        <div className="modal_footer">
          <button
            onClick={() => close(false)}
            className="btn btn-secondary mt-3"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
