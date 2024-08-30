import UserProfileForm from '@/app/_components/UserProfileForm'
import React from 'react'

async function page() {
  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <h1 className='text-5xl p-2'>My Profile</h1>
      <p>Feel free to edit any of your details below so your ASOS account is totally up to date. (* Indicates a required field).</p>

      <UserProfileForm />



    </div>
  )
}

export default page