import { supabase } from "./supabase"

async function getMenu(catId) {
  const { data, error } = await supabase
    .from('menu')
    .select('*')
    .eq("category", catId)

  if (error) {
    throw Error("Failed to fetch Menu : ", error)
  }
  return data

}
export default getMenu