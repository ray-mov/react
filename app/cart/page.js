import CartSummary from "../_components/cart/CartSummary"
import CartTable from "../_components/cart/CartTable"


function page() {


  return (
    <div className="text-center">
      <h1 className='py-6  md:py-4  text-4xl'>Your Cart</h1>
      <div className="flex lg:px-32 gap-6 py-4">
        <CartTable />
        <CartSummary />

      </div>



    </div>
  )
}

export default page