// "use client"
// import { useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ApplyProductFilter } from "../_lib/actions"



function productFilters() {
  return (
    <form className="border-2 px-2 py-5 min-w-72 rounded-md" action={ApplyProductFilter}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl ">Products Filter :</h1>
        <div className="border border-black  p-2 hover:scale-105 shadow-md hover:bg-gray-100">
          <button>Apply</button>
        </div>

      </div>
      {/* Category Filter */}
      <div className="mb-4">
        <label className=" text-lg font-medium text-gray-700">Category</label>
        <select
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          name="category"
        >
          <option value="">All Categories</option>
          <option value="t-shirt">T-Shirts</option>
          <option value="oversized">Oversized T shirt</option>
          <option value="jacket">Jackets</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <select
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          name="price"
        >
          <option value="">All Prices</option>
          <option value="0-500">₹0 - ₹500</option>
          <option value="500-1000">₹500 - ₹1000</option>
          <option value="1000-2000">₹1000 - ₹2000</option>
        </select>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <div className="mt-2 space-y-2">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <div key={size} className="flex items-center">
              <input
                id={`size-${size}`}
                name="size"
                type="radio"
                value={size}
                // checked={selectedSize === size}

                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor={`size-${size}`} className="ml-3 block text-sm font-medium text-gray-700">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <div className="mt-2 space-y-2">
          {['black', 'white', 'blue', 'red'].map((color) => (
            <div key={color} className="flex items-center">
              <input
                id={`color-${color}`}
                name="color"
                type="radio"
                value={color}
                // checked={selectedColor === color}

                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>

    </form>

  )
}

export default productFilters