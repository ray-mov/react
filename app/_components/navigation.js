import Link from "next/link"
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";




const Navigation = () => {
  return (
    <nav className="flex justify-between items-center md:px-5 md:py-4 lg:px-20 lg:py-10" >

      <Link href="/" className="text-4xl font-bold font-robo">Clothix.</Link>

      <ul className="flex gap-6 text-lg">
        <li className="hidden lg:inline">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/about">Men</Link>
        </li>
        <li>
          <Link href="/about">Women</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <CiSearch size={24} />
        </li>
        <li>
          <Link href={"/account/profile"}>
            <CiUser size={24} />
          </Link>
        </li>
        <li>
          <Link href={"/cart"}>
            <div className="relative">
              <CiShoppingCart size={24} />
              <div className="absolute left-4 bottom-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white">
                {0}
              </div>
            </div>
          </Link>

        </li>
      </ul>
    </nav>
  )
}

export default Navigation