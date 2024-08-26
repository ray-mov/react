import Image from "next/image"
import HomeModel from "@/public/home-model.webp"
import Link from "next/link"

const Carausal = () => {
  return (
    <div className="relative w-full flex md:px-5 lg:px-20 max-h-[500px]">
      <div className="w-11/12">
        <div className="absolute top-28 left-20  md:left-12 md:top-24 lg:left-14 lg:top-36 xl:left-24 text-center">
          <h1 className="font-robo text-4xl font-semibold opacity-85 md:text-6xl lg:text-5xl xl:text-7xl ">New Winters <span className=" block lg:inline">Collection</span></h1>
          <button className="border-2 p-2 text-xl mt-10 font-semibold rounded-lg shadow-lg hover:scale-110 ">
            <Link href={"/shop"}>
              Shop Now
            </Link>
          </button>
        </div>
      </div>

      <Image src={HomeModel} alt="Model" className="w-1/2"
        placeholder="blur"
        style={{
          objectFit: "cover",
          objectPosition: "top"
        }
        }
      />

    </div>
  )
}

export default Carausal