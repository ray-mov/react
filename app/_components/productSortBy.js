"use client"

import { useState } from 'react';

const ProductSortBy = ({ onSortChange }) => {


  const [selectedOption, setSelectedOption] = useState('popular');

  const handleSortChange = (e) => {
    // const value = e.target.value;
    // setSelectedOption(value);
    // onSortChange(value);
  };
  return (
    <div className='flex items-center '>
      <label htmlFor="sort-options" className="text-medium font-medium text-gray-700">
        Sort by :
      </label>
      <select
        id="sort-options"
        value={selectedOption}
        onChange={handleSortChange}
        className=" pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="popular">Popular</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
    </div>
  )
}

export default ProductSortBy