// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import client from "../../client";

// export const GetAllPeople = createAsyncThunk(
//   "GetAllPeople",
//   async (config, thunkAPI) => {
//     try {
//       const data = await client({
//         method: "GET",
//         url: "/todos",
//       });
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response);
//     }
//   }
// );
// const DocumentSlice = createSlice({
//   name: "document",
//   initialState: {
//     data: [
//       {
//         id: 1,
//         documentName: "Təhsil",
//         fileLength: ".pdf",
//         size: "80KB",
//         postDate: "2.02.2023",
//       },
//       {
//         id: 2,
//         documentName: "TV və internet",
//         fileLength: ".pdf",
//         size: "52KB",
//         postDate: "2.07.2023",
//       },
//       {
//         id: 3,
//         documentName: "Qalıq kartı",
//         fileLength: ".pdf",
//         size: "25KB",
//         postDate: "2.09.2023",
//       },
//       {
//         id: 4,
//         documentName: "Müştəri siyahısı",
//         fileLength: ".pdf",
//         size: "58KB",
//         postDate: "2.01.2023",
//       },
//       {
//         id: 5,
//         documentName: "Hamlet",
//         fileLength: ".pdf",
//         size: "41KB",
//         postDate: "2.02.2023",
//       },
//       {
//         id: 6,
//         documentName: "Hamlet",
//         fileLength: ".pdf",
//         size: "41KB",
//         postDate: "2.02.2023",
//       },
//       {
//         id: 7,
//         documentName: "Hamlet",
//         fileLength: ".pdf",
//         size: "41KB",
//         postDate: "2.02.2023",
//       },
//       {
//         id: 8,
//         documentName: "Təhsil",
//         fileLength: ".pdf",
//         size: "80KB",
//         postDate: "2.02.2023",
//       },
//       {
//         id: 9,
//         documentName: "TV və internet",
//         fileLength: ".pdf",
//         size: "52KB",
//         postDate: "2.07.2023",
//       },
//       {
//         id: 10,
//         documentName: "Qalıq kartı",
//         fileLength: ".pdf",
//         size: "25KB",
//         postDate: "2.09.2023",
//       },
//     ],
//     loading: false,
//     error: null,
//   },
//   extraReducers: {
//     [GetAllPeople.fulfilled]: (state, action) => {
//       state.data = action.payload.data;
//     },
//   },
// });

// export default DocumentSlice.reducer;
