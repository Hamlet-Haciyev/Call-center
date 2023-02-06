// // In this program, the entire api structure will be used in this way (RTK)
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const settingAPI = createApi({
//   reducerPath: "settingAPI",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://jsonplaceholder.typicode.com",
//   }),
//   endpoints: (builder) => ({
//     getSettings: builder.query({
//       query: () => "/posts",
//     }),
//     getSettingById: builder.query({
//       query: (id) => `/posts/${id}`,
//     }),
//   }),
// });
// export const { useGetSettingsQuery, useGetSettingByIdQuery } = settingAPI;
