
import { Suspense } from "react"
import Shop from "../_components/product/Shop"

const page = ({ searchParams }) => {

  const searchParam = searchParams?.cat

  return (
    <div className="md:px-5  lg:px-20 w-full ">
      <Suspense fallback={<h1>Loading</h1>}>
        <Shop searchParam={searchParam} />
      </Suspense>
    </div>
  )
}

export default page