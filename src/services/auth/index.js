import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
  credentials: "include",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = getState().auth.token;
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //     return headers;
  //   }
  // },
});

const authAPI = createApi({
  baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    signIn: builder.query({}),
    logout: builder.query({}),
    getUser: builder.query({}),
    creataUser: builder.mutation({}),
    updateUser: builder.mutation({}),
  }),
});
export const {} = authAPI;
export default authAPI;
