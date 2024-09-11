
import ProductCard from './productCard'


export default async function ProductList({ filter, supabase, productData }) {

  if (productData == null) {
    const { data: products, error } = await supabase.from("products").select("*")?.ilike('name', `%${filter}%`)
    if (!products.length) return null

    return (
      <div className='flex gap-3 flex-wrap justify-between  w-full'>
        {
          !productData && products.map((item) => {
            return <ProductCard item={item} key={item.id} />
          })
        }
      </div>
    )
  }


  return (
    <div className='flex gap-3 flex-wrap justify-between  w-full'>
      {
        productData.map((item) => {
          return <ProductCard item={item} key={item.id} />
        })
      }
    </div>
  )
}

