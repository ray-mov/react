
import ProductFilters from "../_components/productFilters"
import ProductBar from "../_components/productBar"

import ProductList from "../_components/productList"
import { Suspense } from "react"
import BreadcrumPageNav from "../_components/breadcrumPageNav"

const Shop = ({ searchParams }) => {

  console.log(searchParams);

  const filter = searchParams?.cat || ""
  console.log("filter", filter);


  return (
    <div className="md:px-5  lg:px-20 w-full ">
      <BreadcrumPageNav />

      <div className="flex gap-6  ">
        <ProductFilters />
        <div className="flex-1">
          <ProductBar />
          <Suspense fallback={<h1>loading suspense....</h1>} key={filter}>
            <ProductList filter={filter} />
          </Suspense>
        </div>
      </div>



    </div>
  )
}

export default Shop