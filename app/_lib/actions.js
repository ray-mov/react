"use server"

import { revalidatePath } from "next/cache"
// import { auth } from "./Auth"

export async function updateProfile(formData) {
  // const session = await auth()
  // if (!session) {
  //   throw new Error("You must be logged in")
  // }

  const name = formData.get("name")
  const email = formData.get("email")

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    throw new Error("Please Provide valid email")
  }

  const updateData = { name, email }

  revalidatePath("/account/profile")
  //use supabase
}

export async function ApplyProductFilter(formData) {
  const category = formData.get("category")
  const size = formData.get("size")
  const color = formData.get("color")
  const price = formData.get("price")
  revalidatePath("/shop")
}


export async function ApplyProductSort(formData) {

}