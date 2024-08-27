"use client"

import { useState } from "react"
import Image from "next/image"

function ProductDetailImage({ images }) {

  const [activeImage, setActiveImage] = useState(0)

  return (
    <div>
      <Image src={images[activeImage]} alt="Product Image" width={400} height={440} className="rounded-2xl" />
      <div className="flex gap-4 mt-4">
        {
          images.map((item, index) => {
            return <button key={index} onClick={() => setActiveImage(index)}>
              <Image src={item} alt="Product Image" width={60} height={100} className="rounded-xl" />
            </button>
          }
          )
        }
      </div>

    </div>
  )
}

export default ProductDetailImage