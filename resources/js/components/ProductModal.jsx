import React, { useState } from 'react'
import './ProductModal.css'
import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'

const ProductModal = ({ product, close }) => {
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      ...product,
      cartType: 'product'
    }, quantity) 
    toast.success("Producto agregado al carrito")

    setTimeout(() => {
      close(false)
    }, 300)
  }

  const handleBgClick = (e) => {
    if (e.target.className === "modal_bg") {
      close(false);
    }
  }
  const formattedPrice = Math.trunc(product.price).toLocaleString('es-CL');

  return (
    <div className="modal_bg" onClick={handleBgClick}>
      <div className="modal_content shadow">

        <button
          className="close-btn-circle shadow-sm"
          onClick={() => close(false)}
          aria-label="Cerrar"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal_body">
          <img
            src={`storage/${product.image_url}`}
            alt={product.name}
            className="product-modal-img shadow-sm"
          />

          <h3 className="text-center mt-4 fw-bold text-dark">{product.name}</h3>
          <p className="text-center text-muted mt-2 mb-4 px-2" style={{ fontSize: '0.95rem' }}>
            {product.description}
          </p>

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

            <button className="add-cart-btn shadow-sm" onClick={handleAddToCart}>
              <span>AGREGAR</span> 
              <span className="price">${formattedPrice}</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal