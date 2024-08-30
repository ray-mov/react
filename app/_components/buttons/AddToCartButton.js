"use client"

import { useCart } from "../context/CartContext"

function AddToCartButton({ product }) {

  const { id, name, description, discount_price, regular_price, img_urls } = product

  const { addToCart } = useCart()




  function handleCart() {

    const product = {
      id,
      name,
      description,
      discount_price,
      regular_price,
      img: img_urls[0]

    }

    addToCart(product)

  }


  return (
    <button className="mt-2 py-1 px-4 border-2 border-black rounded-3xl font-semibold " onClick={handleCart}>Add To Cart</button>
  )
}

export default AddToCartButton