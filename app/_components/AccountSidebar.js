import Link from "next/link"

const AccountSidebar = () => {

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 gap-4 p-4">
      <h1 className="text-xl">Username</h1>
      <ul className="w-full text-center  text-xl">
        <li className="hover:bg-gray-200 p-2">
          <Link href="/account/profile">Profile</Link>
        </li>
        <li className="hover:bg-gray-200 p-2">
          <Link href="/account/orders">Orders</Link>
        </li>
        <li className="hover:bg-gray-200 p-2">
          <Link href="/account/wishlist">wishlist</Link>
        </li>
      </ul>
    </div>
  )
}

export default AccountSidebar