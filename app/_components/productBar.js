
import ProductSortBy from './productSortBy'
import PaginationBar from './product/paginationBar'

const ProductBar = () => {
  return (
    <div className='flex justify-between items-center mb-6 w-full'>
      <ProductSortBy />

      <PaginationBar />
    </div>
  )
}

export default ProductBar