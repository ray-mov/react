"use client"

import { createContext, useContext, useState } from "react";
import { createClient } from "@/Utils/supabase/client";

const ProductContext = createContext()

const initialState = []
// id: null,
// name: "",
// description: '',
// regular_price: null,
// category: null,
// img_urls: [
// ],
// color: 'White/Sculpt Dreams',
// tag: 1



function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialState)
  const supabase = createClient()

  const getProductList = async ({ filter = "" }) => {
    let { data: products, error } = await supabase
      .from('products')
      .select("*")
      .eq("category", filter)
      .range(0, 9)

    setProducts(products)
    if (error) {
      throw new Error(error)

    }
  }

  const updateProductList = () => {

  }



  return <ProductContext.Provider value={{ products, setProducts, getProductList }}>
    {children}
  </ProductContext.Provider>
}

function useProduct() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("Context is used outside provider")
  }
  return context
}


export { ProductProvider, useProduct }