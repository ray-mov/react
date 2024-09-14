

import ProductCard from './productCard'
export default function ProductList({ products, isLoading, error }) {


  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='flex gap-3 flex-wrap justify-between  w-full'>
      {
        products.map((item) => {
          return <ProductCard item={item} key={item.id} />
        })
      }
    </div>
  )
}

