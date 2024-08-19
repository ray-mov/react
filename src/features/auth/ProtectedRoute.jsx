import { useGetUserQuery } from "./useUser"

const ProtectedRoute = () => {

  const {isLoading, error}  =  useGetUserQuery();
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute