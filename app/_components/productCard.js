import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ item }) => {

  const { name, description, discount_price, regular_price, img_urls, color, id } = item


  return (
    <Link href={`/product/${id}`}
      className="border-2 max-w-72 rounded-sm pb-2" >
      <div className=" flex flex-col  items-center gap-2 relative">
        <div className=" flex-1">
          <Image src={img_urls[0]} alt={`${name}`}
            width={240} height={290}
          />
        </div>
        <p className="font-mono text-base text-center text-wrap ">{name}</p>
        <p className="space-x-4 font-mono text-base  text-"><span className="line-through decoration-red-500">{regular_price}</span>
          <span>{discount_price}</span>
        </p>
      </div>
    </Link>
  )
}

export default ProductCard