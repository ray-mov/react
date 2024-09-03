import React from 'react'

function CartSummary() {
  return (
    <div className='w-4/12'>

      <div className=' bg-gray-100 py-6 space-y-3'>
        <h1 className='text-xl'>Order Summary</h1>
        <div className='border-t-2 space-y-3 py-4'>
          <p><span>Subtotal</span>
            <span></span></p>
          <p><span>Shipping</span>
            <span></span></p>
          <p className='text-green-500'>Add coupon code</p>
        </div>
        <div className='border-t-2 flex justify-between py-3 items-center px-5 bg-gray-300'>
          <h1>Total</h1>
          <h1>4554</h1>
        </div>

      </div>
      <button className='font-robo bg-green-600 text-white w-full py-3'>
        CHECKOUT
      </button>
    </div>

  )
}

export default CartSummary