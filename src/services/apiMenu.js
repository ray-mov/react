import { supabase } from "./supabase"

async function getMenu() {

  const { data, error } = await supabase
    .from('Menu')
    .select('*')

  if (error) {
    throw Error("Failed to fetch Menu : ", error)
  }
  return data

}
export default getMenu