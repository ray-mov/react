
import { supabase } from "./supabase";

export const getUser = async function ({ email }) {
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
  if (error) {
    console.log("failed to fetch user :: error : ", error);
    throw new Error("failed to fetch user ")
  }
  return user
}

export const createUser = async function ({ name, email }) {
  const { data: user, error } = await supabase
    .from('users')
    .insert([{ name, email }])
  if (error) {
    console.log("failed to create user :: error : ", error);
    throw new Error("failed to create user ")
  }
  return user
}