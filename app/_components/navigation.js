import Link from "next/link"
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
// import { auth } from "../_lib/Auth";\
import { auth } from "@/auth";




const Navigation = async () => {

  // const session = await auth()
  // console.log(session);

  const session = await auth()
  console.log(session);



  return (
    <nav className="flex justify-between items-center md:px-5 md:py-4 lg:px-20 lg:py-10" >

      <Link href="/" className="text-4xl font-bold font-robo">Clothix.</Link>

      <ul className="flex gap-6 text-lg items-center">
        <li className="hidden lg:inline">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop" >Shop</Link>
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
          <Link href={"/cart"}>
            <div className="relative">
              <CiShoppingCart size={24} />
              <div className="absolute left-4 bottom-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white">
                {0}
              </div>
            </div>
          </Link>

        </li>
        <li>
          {
            session?.user?.image ? <Link href={"/account/profile"} className="flex items-center gap-2">
              <p className=" text-gray-500 font-robo text-base">Hi, {session.user.name.split(" ")[0]}</p>
              <img src={session.user.image} className="h-10 rounded-full" alt={session.user.name} referrerPolicy="no-referrer" />
            </Link> :

              <Link href={"/account/profile"}>
                {/* <CiUser size={24} /> */}

                <button className="border-2 border-gray-400 py-1 px-2 rounded-xl opacity-80 shadow-lg hover:scale-105">Sign Up</button>
              </Link>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Navigation