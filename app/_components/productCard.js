import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ item }) => {

  const { name, description, discount_price, regular_price, img_urls, color, id } = item


  return (
    <Link href={`/product/${id}`}>
      <div className=" flex flex-col max-w-72 items-center gap-2 ">
        <div className="relative flex-1">
          <Image src={img_urls[0]} alt={`${name}`}
            width={230} height={300}

            className="border-2" />
        </div>
        <p className="font-mono text-base text-center">{name}</p>
      </div>
    </Link>
  )
}

export default ProductCard