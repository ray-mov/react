export { auth as middleware } from "@/auth"



// import { NextResponse } from "next/server"

// export function middleware(request) {
//   return NextResponse.redirect( new URL("/about", request.url))

// }

export const config = {
  matcher: ["/account",]
}