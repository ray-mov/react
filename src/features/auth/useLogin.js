import { useMutation } from "@tanstack/react-query";
import Login from "../../pages/Login";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {

  const navigate = useNavigate()

  const { mutate:login, isLoading} = useMutation({
    mutationFn: ({email, password}) => Login({email, password}),
    onSuccess: (user) => {
      console.log(user);
      
      navigate("/dashboard")
    },
    onError: error => {
      console.log(error);
      toast.error("Invalid Credential")

    }
  })

  return { login, isLoading}
  
}