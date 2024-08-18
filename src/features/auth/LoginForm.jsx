import { useState } from "react";
import { useLogin } from "./useLogin"



const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const {login, isLoading} = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password ) return;
    login({email, password})
    
  }

  return (
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder="email" disabled={isLoading}/>
    <input type="password" name="" id="" placeholder="password"  disabled={isLoading}/>
    <input type="submit" value="SUBMIT"  disabled={isLoading} />
   </form>
  )
}

export default LoginForm