import React, { useState } from 'react'
import ItemCart from './ItemCart'
import './Cart.css'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = ({ onClose }) => {

  const navigate = useNavigate()

  const { cart, increaseQty, decreaseQty, removeItem, total} = useCart()

  const navigateToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>

        <button
          className="close-btn-circle"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h2>Tu pedido</h2>

        <div className="cart-items">
          {cart.length === 0 && <p>Carrito vacío</p>}

          {cart.map(product => (
            <ItemCart
              key={product.id}
              product={product}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              onRemove={removeItem}
            />
          ))}
        </div>

        <div className="cart-total">
          <span>Total</span>
          <span>${total}</span>
        </div>

        <button className="cart-pay-btn" onClick={navigateToCheckout}>
          CONTINUAR CON EL PAGO
        </button>

      </div>

    </div>
  )
}

export default Cart
