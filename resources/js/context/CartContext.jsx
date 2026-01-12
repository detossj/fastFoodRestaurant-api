import React from 'react'

import { createContext, useContext, useState, useEffect } from "react"


const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })
      
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart')
    }
      
    const addToCart = (item, quantity) => {
        const cartId = `${item.cartType}-${item.id}`;
      
        setCart(prev => {
          const existing = prev.find(i => i.cartId === cartId);
      
          if (existing) {
            return prev.map(i =>
              i.cartId === cartId
                ? { ...i, quantity: i.quantity + quantity }
                : i
            );
          }
      
          return [
            ...prev,
            {
              ...item,
              cartId,
              quantity
            }
          ];
        });
    };
      

    const increaseQty = (id) => {
        setCart(cart.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
        ))
    }

    const decreaseQty = (id) => {
        setCart(cart.map(p =>
        p.id === id && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        ))
    }

    const removeItem = (id) => {
        setCart(cart => cart.filter(item => item.id !== id));
    };

    const total = cart.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
    )

    const totalItems = cart.reduce(
        (acc, p) => acc + p.quantity,
        0
    )

    return (
        <CartContext.Provider value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        clearCart,
        removeItem,
        total,
        totalItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
