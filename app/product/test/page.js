"use client"

import { useState } from 'react';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => setSelectedSize(e.target.value);
  const handleColorChange = (e) => setSelectedColor(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  const handleAddToCart = () => {
    // Handle the logic for adding the product to the cart
    console.log('Product added to cart:', {
      selectedSize,
      selectedColor,
      quantity,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex flex-col">
          <img
            src="/images/product-main.jpg"
            alt="Product Main"
            className="w-full h-auto rounded-lg mb-4"
          />
          <div className="grid grid-cols-4 gap-4">
            <img
              src="/images/product-thumb-1.jpg"
              alt="Product Thumbnail 1"
              className="w-full h-auto rounded-lg cursor-pointer"
            />
            <img
              src="/images/product-thumb-2.jpg"
              alt="Product Thumbnail 2"
              className="w-full h-auto rounded-lg cursor-pointer"
            />
            <img
              src="/images/product-thumb-3.jpg"
              alt="Product Thumbnail 3"
              className="w-full h-auto rounded-lg cursor-pointer"
            />
            <img
              src="/images/product-thumb-4.jpg"
              alt="Product Thumbnail 4"
              className="w-full h-auto rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Name</h1>
          <p className="text-lg text-gray-600 mb-6">
            $99.99 <span className="line-through text-gray-400">$129.99</span>
          </p>
          <p className="text-gray-700 mb-6">
            This is a detailed description of the product. It includes all the
            features, materials, and benefits that make this product special.
          </p>

          {/* Product Options */}
          <div className="mb-6">
            <div className="mb-4">
              <label className="block text-gray-700">Size</label>
              <select
                value={selectedSize}
                onChange={handleSizeChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">X-Large</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Color</label>
              <select
                value={selectedColor}
                onChange={handleColorChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max="10"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
