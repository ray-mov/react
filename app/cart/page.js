"use client"

import { useState } from 'react';
import { useCart } from '../_components/context/CartContext';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'White Oversized T-Shirt',
      size: 'M',
      color: 'White',
      quantity: 1,
      price: 25,
      image: '/path-to-image.jpg', // Replace with your image path
    },
    {
      id: 2,
      name: 'Blue Denim Jacket',
      size: 'L',
      color: 'Blue',
      quantity: 1,
      price: 60,
      image: '/path-to-image.jpg', // Replace with your image path
    },
  ]);

  const { cart } = useCart()
  console.log(cart);


  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-md shadow-md flex">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Size: {item.size}</p>
                <p className="text-gray-600">Color: {item.color}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 border rounded-md text-gray-600 hover:bg-gray-200"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded-md text-gray-600 hover:bg-gray-200"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <span className="ml-4 text-lg font-semibold">${item.price}</span>
                </div>
              </div>
              <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold">
            Total: ${getTotalPrice()}
          </h2>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
