import Image from "next/image"
import TrendImg from "@/public/home-trend.webp"
import { createClient } from "@/Utils/supabase/server"
import ProductCard from "./productCard"


async function HomeTrend() {

  const supabase = createClient()
  const { data: products, error } = await supabase.from("products").select("*").eq("tag", 1).range(0, 5)

  console.log("line x", products);
  console.log(error);



  return (
    <div className='flex py-10 lg:px-20'>
      <div className='relative max-h-[500px] max-w-[350px]'>
        <Image src={TrendImg} alt="Trending" />
        <div className="bg-white w-44 h-24 shadow-md absolute left-[0px] top-48 py-5 ">
          <h1 className="text-5xl ">#trend</h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-3">
        {
          products.map((item) => {
            <ProductCard key={item.id} item={item} />
          })
        }


      </div>

    </div>
  )
}

export default HomeTrend