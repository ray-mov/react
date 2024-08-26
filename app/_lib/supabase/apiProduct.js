
import { supabase } from "./supabase";

export const getProducts = async function () {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
  if (error) {
    console.log("product fetching error : ", error);
    throw new Error("Product could not be loaded")
  }
  console.log("product", products);

  return products
}