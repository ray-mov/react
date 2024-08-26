
import ProductFilters from "../_components/productFilters"
import ProductBar from "../_components/productBar"

import ProductList from "../_components/productList"
import { Suspense } from "react"

const Shop = () => {
  return (
    <div>
      <h1>breadcrum nav</h1>
      <div className="flex">
        <ProductFilters />
        <div>
          <ProductBar />
          <Suspense fallback={<h1>loading suspense....</h1>}>
            <ProductList />
          </Suspense>
        </div>


      </div>
    </div>
  )
}

export default Shop