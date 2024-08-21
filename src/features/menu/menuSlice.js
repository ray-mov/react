import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import getMenu from '../../services/apiMenu';

export const menuSlice = createApi({
  reducerPath: 'api/menu',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      queryFn: async (catId) => {
        try {
          const data = await getMenu(catId); // Call your function here
          return { data }; // Return the data if successful
        } catch (error) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } }; // Handle errors
        }
      },
    }),
    // Other endpoints can go here
  }),
});

export const { useGetMenuQuery } = menuSlice;