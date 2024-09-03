"use client"


import Image from "next/image";
import { useCart } from "../context/CartContext";
import EmptyCart from "@/public/cart-empty.gif"

function CartTable() {

  const { cart } = useCart()


  return (
    <div className='w-8/12'>

      <table className="w-full table-auto">
        <tr className="font-mono text-gray-500 border-b-2">
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>TOTAL</th>
        </tr>
        {
          cart?.map((item, index) => {
            return <tr key={index}>
              <td>
                <div>
                  <Image src={item.img_urls[0]} alt={item.name} />
                </div>
                <div className="flex">

                </div>
              </td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany</td>
            </tr>
          })
        }
      </table>
      {cart.length === 0 && <div className="w-full h-full flex flex-col justify-center items-center ">
        <Image src={EmptyCart} alt="" />
        <p className="text-gray-600 font-robo ">Your cart is Empty</p>

      </div>}


    </div>
  )
}

export default CartTable