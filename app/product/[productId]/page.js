
import ProductDetailImage from "@/app/_components/productDetailImage";
import { createClient } from "@/Utils/supabase/server"
import { notFound } from "next/navigation"


// export async function generateMetaData({ params }, context) {
//   const supabase = createClient()
//   const { data: product, error } = await supabase.from("products").select("*").eq("id", params.productId).single()
//   return { title: `${product.name}` }
// }

//pre rendering routes
// export async function generateStaticParams(context) {
//   const supabase = createClient()
//   const { data: products, error } = await supabase.from("products").select("*")
//   //  .eq("id", params.productId).single() 

//   const productId = products.map((product) => ({
//     productId: String(product.id)
//   }))

//   return productId
// }

async function Product({ params }) {

  const supabase = createClient()
  const { data: product, error } = await supabase.from("products").select("*").eq("id", params.productId).single()

  console.log(product);

  if (error) {
    notFound()
  }


  return (
    <div className="flex flex-col items-center lg:flex-row m-4 gap-6 lg:justify-center lg:items-start">
      <div>
        <ProductDetailImage images={product.img_urls} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold lg:text-4xl">{product.name}</h1>
        <p className="font-semibold opacity-70 space-x-2"><span>4.5</span> |<span>100k Reviews</span></p>
        <p className="font-medium text-2xl ">₹ <span className="mr-3 line-through decoration-red-500 decoration-2">{product.regular_price}</span>{product.discount_price}</p>
        <p>Colors : <span>{product.color}</span></p>
        <p>Size : </p>
        <div className="flex gap-4 flex-wrap">
          <button className="py-1 px-4 border-2 border-black rounded-xl font-semibold">S</button>
          <button className="py-1 px-4 border-2 border-black rounded-xl font-semibold">M</button>
          <button className="py-1 px-4 border-2 border-black rounded-xl font-semibold">L</button>
        </div>
        <button className="mt-2 py-1 px-4 border-2 border-black rounded-3xl font-semibold bg-black text-white">Buy Now</button>
        <button className="mt-2 py-1 px-4 border-2 border-black rounded-3xl font-semibold ">Add To Cart</button>
        <h2 className="font-semibold">Description</h2>
        <p className="divide-opacity-70">{product.description}</p>
      </div>
    </div>
  )
}

export default Product