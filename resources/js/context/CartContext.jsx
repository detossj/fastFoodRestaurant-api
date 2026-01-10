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
      
      

    const addToCart = (product, quantity = 1) => {
        setCart(prev => {
            const exists = prev.find(p => p.id === product.id)
        
            if (exists) {
            return prev.map(p =>
                p.id === product.id
                ? { ...p, quantity: p.quantity + quantity }
                : p
            )
            }
        
            return [...prev, { ...product, quantity }]
        })
    }
      

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
