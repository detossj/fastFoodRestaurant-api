import React, { useState } from 'react'
import ItemCart from './ItemCart'
import './Cart.css'

const Cart = ({ onClose }) => {

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Hamburguesa', precio: 4500, cantidad: 1 },
    { id: 2, nombre: 'Pizza', precio: 8000, cantidad: 2 },
    { id: 3, nombre: 'Bebida', precio: 1500, cantidad: 1 },
  ])

  const aumentar = (id) => {
    setProductos(productos.map(p =>
      p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
    ))
  }

  const disminuir = (id) => {
    setProductos(productos.map(p =>
      p.id === id && p.cantidad > 1
        ? { ...p, cantidad: p.cantidad - 1 }
        : p
    ))
  }

  const total = productos.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  )

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>

        <h2>Tu pedido</h2>

        {productos.map(producto => (
          <ItemCart
            key={producto.id}
            producto={producto}
            onSumar={aumentar}
            onRestar={disminuir}
          />
        ))}

        <hr />
        <h3>Total: ${total}</h3>

      </div>
    </div>
  )
}

export default Cart
