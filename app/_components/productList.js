
import React from 'react'
import ProductCard from './productCard'
import { createClient } from '@/Utils/supabase/server';

export default async function ProductList({ filter }) {
  const supabase = createClient()
  const { data: products, error } = await supabase.from("products").select("*").ilike('name', `%${filter}%`)


  console.log(products);
  if (!products.length) return null

  return (
    <div className='flex gap-6 flex-wrap w-full'>
      {
        products.map((item) => {
          return <ProductCard item={item} key={item.id} />
        })
      }

    </div>
  )
}

