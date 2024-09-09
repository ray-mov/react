"use client"

import { createContext, useContext, useState } from "react";

const ProductPaginationContext = createContext()

const initialState = {
  totalPages: null,
  pageNumber: 1,
  rangeFrom: 0,
  rangeTo: 9
}

function ProductPaginationProvider({ children }) {
  const [page, setPage] = useState(initialState)

  const nextPage = () => {
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

  return <ProductPaginationContext.Provider value={{ page, setPage, nextPage, previousPage }}>
    {children}
  </ProductPaginationContext.Provider>
}

function useProductPagination() {
  const context = useContext(ProductPaginationContext)
  if (context === undefined) {
    throw new Error("Context is used outside provider")
  }
  return context
}


export { ProductPaginationProvider, useProductPagination }