import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import documentReducer from "./document";
import documentAPI from "../services/document";
export const store = configureStore({
  reducer: {
    // document: documentReducer,
    [documentAPI.reducerPath]: documentAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([documentAPI.middleware]),
  // middleware: [
  //   ...getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  // ],
});
