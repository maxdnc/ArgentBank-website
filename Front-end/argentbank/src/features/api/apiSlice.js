import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (user) => ({
        url: "user/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetTokenMutation } = apiSlice;
