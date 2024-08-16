import { supabase } from "./supabase"

async function getCategory() {

  const { data, error } = await supabase
    .from('category')
    .select('*')

  if (error) {
    throw Error("Failed to fetch Category : ", error)
  }
  return data

}
export default getCategory