import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    }
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
  }
};

const authAPI = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: "Users",
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUser: builder.query({
      query: (user) => ({
        url: `/users/${user.username}`,
        method: "GET",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const { useLoginMutation, useGetUsersQuery, useGetUserQuery } = authAPI;
export default authAPI;
