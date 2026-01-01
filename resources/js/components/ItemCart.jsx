import React from 'react'

const ItemCart = ({ producto, onSumar, onRestar }) => {
  const { id, nombre, precio, cantidad } = producto

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '12px'
    }}>
      <span style={{ flex: 1 }}>{nombre}</span>

      <button onClick={() => onRestar(id)}>-</button>
      <span>{cantidad}</span>
      <button onClick={() => onSumar(id)}>+</button>

      <span>${precio * cantidad}</span>
    </div>
  )
}

export default ItemCart
