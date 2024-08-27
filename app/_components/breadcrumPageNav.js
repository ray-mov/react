"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BreadcrumPageNav() {

  const path = usePathname()
  const paths = path.split("/")



  return (
    <div className="py-3 text-lg font-robo font-medium opacity-80">
      {paths.map((item, index) => {
        return item == "" ? <Link href={"/"} className="hover:scale-110 hover:text-blue-600">Home</Link> : <span key={index} className="hover:scale-105 cursor-pointer hover:text-blue-600"> &gt; {item}</span>
      })}
    </div>
  )
}
