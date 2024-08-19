import { supabase } from "./supabase"


//login
async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) {
    throw Error("Failed to login : ", error.message)
  }
  return data
}

//signup
async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  if (error) {
    throw Error("Failed to login : ", error.message)
  }
  return data
}


//signout
async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw Error("Failed to login : ", error.message)
  }
}

export async function getCurrentUser() {
  const { data: session  } = await supabase.auth.getSession()
  if(!session.session) return null;

  const { data, error } = await supabase.auth.getUser()
  console.log(data);
  if (error) {
    throw Error("Failed to get User : ", error.message)
  }
  return data?.user;
}


export { login, signIn , signOut }