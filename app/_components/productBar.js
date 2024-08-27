import React from 'react'
import PaginationNav from './paginationNav'
import ProductSortBy from './productSortBy'

const ProductBar = () => {
  return (
    <div className='flex justify-between items-center mb-6 w-full'>
      <ProductSortBy />
      <PaginationNav />
    </div>
  )
}

export default ProductBar