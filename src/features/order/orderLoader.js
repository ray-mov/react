import getMenu from "../../services/apiMenu"

export async function orderLoader({params}) {
  // params.orderId
  const menu = await getMenu()
  return menu
}