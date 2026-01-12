import React, { useState } from 'react'
import './ProductModal.css'
import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'

const ProductModal = ({ product, close }) => {
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product, quantity) 
    toast.success("Producto agregado al carrito")

    setTimeout(() => {
      close(false)
    },500)
  }

  return (
    <div className="modal_bg">
      <div className="modal_content">

        <button
          className="close-btn-circle"
          onClick={() => close(false)}
          aria-label="Cerrar"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>


        <div className="modal_body">
          <img
            src={`storage/${product.image_url}`}
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

          <button className="add-cart-btn" onClick={handleAddToCart}>
            AGREGAR <span className="price">${Math.trunc(product.price)}</span>
          </button>

        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
