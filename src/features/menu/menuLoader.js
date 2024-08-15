import getMenu from "../../services/apiMenu"

export async function menuLoader() {
  const menu = await getMenu()
  return menu
}