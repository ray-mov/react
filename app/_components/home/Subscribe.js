import React from 'react'

function Subscribe() {
  return (
    <div className='flex justify-between items-center'>
      <div className='space-y-5'>
        <h1 className='text-5xl'><span></span>get in touch</h1>
        <p className='text-gray-500'>Subscribe to our latest stories and promotions (50% sale)</p>

      </div>
      <div className='border-2 border-black flex p-0 '>
        <input type="email" placeholder='Enter your email' className='text-center outline-none  py-2' />
        <button className='bg-black text-white px-4  '>Subscribe</button>

      </div>

    </div>
  )
}

export default Subscribe