"use client"

import { createContext, useContext, useState } from "react";


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
  const [page, setPage] = useState(initialState)

  const getProduct = () => {
    setPage((prevState) => {

      if (prevState.pageNumber === prevState.totalPages) {
        return prevState
      }

      return { ...prevState, pageNumber: prevState.pageNumber + 1, rangeFrom: prevState.rangeTo + 1, rangeTo: prevState.rangeTo + 9 }

    })
  }

  const previousPage = () => {
    setPage((prevState) => {
      if (prevState.pageNumber === 1) {
        return prevState
      }
      return { ...prevState, pageNumber: prevState.pageNumber - 1 }
    })
  }

  return <ProductContext.Provider value={{ page, setPage, nextPage, previousPage }}>
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