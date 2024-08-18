import { supabase } from "./supabase"

async function getAllOrders() {

  const { data, error } = await supabase
    .from('orders')
    .select('*')

  if (error) {
    throw Error("Failed to fetch orders : ", error)
  }
  return data

}
async function cancelOrder(id) {
  const { error } = await supabase
    .from('orders')
    .delete()
    .eq("id", id)
  if (error) {
    throw Error("Order cannot be canceled : ", error)
  }
  
}


export { getAllOrders, cancelOrder }






