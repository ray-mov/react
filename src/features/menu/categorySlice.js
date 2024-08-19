import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import getCategory from '../../services/apiCategory';

export const categorySlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), 
  endpoints: (builder) => ({
    getCategories: builder.query({
      queryFn: async () => {
        try {
          const data = await getCategory(); // Call your function here
          return { data }; // Return the data if successful
        } catch (error) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } }; // Handle errors
        }
      },
    }),
    // Other endpoints can go here
  }),
});

export const { useGetCategoriesQuery } = categorySlice;