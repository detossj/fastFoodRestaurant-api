import React, { useState } from 'react'
import ItemCart from './ItemCart'
import './Cart.css'

const Cart = ({ onClose }) => {

  const [products, setProducts] = useState([
    { id: 1, name: 'Pizza Napolitana', price: 8900, quantity: 1, image_url: '/pizza-napolitana.webp' },
    { id: 2, name: 'Hamburguesa Doble', price: 6200, quantity: 2, image_url: '/hamburguesa-doble.webp' },
    { id: 3, name: 'Coca-Cola Zero 350ml', price: 1500, quantity: 1, image_url: '/coca-cola-zero-350ml.webp' },
  ])

  const increase = (id) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ))
  }

  const decrease = (id) => {
    setProducts(products.map(p =>
      p.id === id && p.quantity > 1
        ? { ...p, quantity: p.quantity - 1 }
        : p
    ))
  }

  const total = products.reduce(
    (acc, p) => acc + p.price * p.quantity,
    0
  )

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>

        <h2>Tu pedido</h2>

        <div className="cart-items">
          {products.map(product => (
            <ItemCart
              key={product.id}
              product={product}
              onIncrease={increase}
              onDecrease={decrease}
            />
          ))}
        </div>

        <div className="cart-total">
          <span>Total</span>
          <span>${total}</span>
        </div>

      </div>
    </div>
  )
}

export default Cart
