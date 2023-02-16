import { configureStore } from "@reduxjs/toolkit";
import authAPI  from "../services/auth";
import documentAPI from "../services/document";
export const store = configureStore({
  reducer: {
    [documentAPI.reducerPath]: documentAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat([documentAPI.middleware])
      .concat([authAPI.middleware]),
});
