"use client"

import BreadcrumPageNav from "../breadcrumPageNav"
import ProductFilters from "../productFilters"
import ProductBar from "../productBar"
import ProductList from "../productList"
import { supabase } from "@/Utils/supabase/client"
import useSWR from "swr"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

function Shop({ searchParam }) {

  const fetcher = async () => {
    const { data, error } = await supabase.from('products').select('*')
    if (error) throw new Error(error.message);
    return data;
  };

  const { data, error, isLoading } = useSWR('supabase-data', fetcher);

  const pathName = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  console.log("searchparas", searchParams.get("price"));



  const handleFilterProducts = (event) => {
    event.preventDefault()
    const formElements = event.target.elements;

    // Accessing each field by name
    const price = formElements.price.value;
    const size = formElements.size.value;
    const color = formElements.color.value;
    const category = formElements.category.value;

    console.log("price:", price);
    console.log("size:", size);
    console.log("color:", color);


    const params = new URLSearchParams(searchParams);

    // Update the search params with the new filter values
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    if (price) {
      params.set('price', price);
    } else {
      searchParams.delete('price');
    }

    if (size) {
      params.set('size', size);
    } else {
      params.delete('size');
    }

    if (color) {
      params.set('color', color);
    } else {
      params.delete('color');
    }
    replace(`${pathName}?${params.toString()}`)
  }



  return (
    <>
      <BreadcrumPageNav />
      <div className="flex gap-6  ">
        <ProductFilters handleFilterProducts={handleFilterProducts} />
        <div className="flex-1">
          <ProductBar />
          <ProductList products={data} error={error} isLoading={isLoading} />
        </div>
      </div>
    </>
  )
}

export default Shop