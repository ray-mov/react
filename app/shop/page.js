
import ProductFilters from "../_components/productFilters"
import ProductBar from "../_components/productBar"

import ProductList from "../_components/productList"
import { Suspense } from "react"
import { createClient } from "@/Utils/supabase/server"
import BreadcrumPageNav from "../_components/breadcrumPageNav"

const Shop = ({ searchParams }) => {
  const supabase = createClient()

  console.log(searchParams);

  const filter = searchParams?.cat || ""
  console.log("filter", filter);
  let products = null

  const updateProductList = async ({ category, priceFrom, priceTo, size, color, pagefrom = 0, pageTo = 9 }) => {
    "use server"
    const { data, error } = await supabase.from("products").select("*")?.ilike('name', `%${filter}%`).eq('color', color).eq('size', size).gte('discount_price', priceFrom).lte('discount_price', priceTo).range(pagefrom, pageTo)
    products = data
  }


  return (
    <div className="md:px-5  lg:px-20 w-full ">
      <BreadcrumPageNav />
      <div className="flex gap-6  ">
        <ProductFilters updateProductList={updateProductList} />
        <div className="flex-1">
          <ProductBar updateProductList={updateProductList} />
          <Suspense fallback={<h1>loading suspense....</h1>} key={filter}>
            <ProductList filter={filter} supabase={supabase} productData={products} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Shop