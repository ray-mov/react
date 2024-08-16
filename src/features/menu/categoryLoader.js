import getCategory from "../../services/apiCategory";

export async function categoryLoader() {
  const category = await getCategory()
  return category
}