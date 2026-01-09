import React from 'react'
import './ItemCart.css'
import Config from '../Config'

const ItemCart = ({ product, onIncrease, onDecrease, onRemove }) => {
  const { id, name, price, quantity, image_url } = product

  return (
    <div className="item-cart">

      <img
        src={`${Config.API_BASE_URL}/storage${image_url}`}
        alt={name}
        className="item-cart-img"
      />

      <div className="item-cart-info">
        <span className="item-cart-name">{name}</span>

        <div className="item-cart-bottom">
          <div className="quantity-selector">
            <button className="qty-btn" onClick={() => onDecrease(id)}>-</button>
            <span>{quantity}</span>
            <button className="qty-btn" onClick={() => onIncrease(id)}>+</button>
          </div>

          <span className="item-cart-price">${price}</span>
        </div>

        <button
          className="remove-item-btn"
          onClick={() => onRemove(id)}
          aria-label="Eliminar producto"
        >
          <i className="fa-solid fa-trash"></i>
        </button>

      </div>

    </div>
  )
}

export default ItemCart
