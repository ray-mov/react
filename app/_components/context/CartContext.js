"use client"

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const initialState = []

function CartProvider({ children }) {
  const [cart, setCart] = useState(initialState);




  //Add To Cart

  const addToCart = (product) => {
    setCart((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }} >
    {children}
  </CartContext.Provider>
}

function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("Context is used outside provider")
  }
  return context
}

export { CartProvider, useCart }