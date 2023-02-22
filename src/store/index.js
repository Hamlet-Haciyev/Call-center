import { configureStore } from "@reduxjs/toolkit";
import authAPI from "../services/auth";
import documentAPI from "../services/document";
import settingAPI from "../services/setting";
export const store = configureStore({
  reducer: {
    [documentAPI.reducerPath]: documentAPI.reducer,
    [settingAPI.reducerPath]: settingAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat([documentAPI.middleware])
      .concat([settingAPI.middleware])
      .concat([authAPI.middleware]),
});
