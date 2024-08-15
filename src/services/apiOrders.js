import { suparbase } from "./superbase"

async function getAllOrders() {

  const { data, error } = await suparbase
    .from('orders')
    .select('*')

  if (error) {
    throw Error("Failed to fetch orders : ", error)
  }
  return data

}
export { getAllOrders }




