import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const terminalAPI = createApi({
  reducerPath: "terminalAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTerminals: builder.query({
      query: () => "/posts",
    }),
    getTerminalById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});
export const { useGetTerminalsQuery, useGetTerminalByIdQuery } = terminalAPI;
