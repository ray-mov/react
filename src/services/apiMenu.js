import { suparbase } from "./superbase"

async function getMenu() {

  const { data, error } = await suparbase
    .from('Menu')
    .select('*')

  if (error) {
    throw Error("Failed to fetch Menu : ", error)
  }
  return data

}
export default getMenu