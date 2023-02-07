import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const documentAPI = createApi({
  reducerPath: "documentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:3000",
  }),
  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: () => "/documents",
    }),
    getDocument: builder.query({
      query: (id) => `/documents/${id}`,
    }),
    deleteDocument: builder.mutation({
      query: (id) => {
        return {
          url: `/documents/${id}`,
          method: "DELETE",
          credentials: "include",
        };
      },
    }),
  }),
});
export const {
  useGetDocumentsQuery,
  useGetDocumentQuery,
  useDeleteDocumentMutation,
} = documentAPI;
export default documentAPI;
