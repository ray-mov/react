
// import { useQuery} from ""

// export function useUser() {
//   const { isLoading, data: user, error} = 
  
// }

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
export  const userSlice = createApi({
  reducerPath: "user",
  baseQuery : fetchBaseQuery({
    baseUrl: ""
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/posts',
    })
  })
})

export const { useGetUserQuery} = userSlice

