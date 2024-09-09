import { signIn } from "@/auth";
import GoogleIcon from "@/public/google.png"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirect: "/home" })
      }}
      className=""
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 