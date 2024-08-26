import { metadata } from "@/app/layout";
import { createClient } from "@/Utils/supabase/server"


export async function generateMetaData({ params }) {

  const { data: product, error } = await supabase.from("products").select("*").eq("id", params.productId).single()
  return { title: `${product.name}` }
}

async function Product({ params }) {

  const supabase = createClient()
  const { data: product, error } = await supabase.from("products").select("*").eq("id", params.productId).single()

  console.log(product);


  return (
    <div>{params.productId}</div>
  )
}

export default Product