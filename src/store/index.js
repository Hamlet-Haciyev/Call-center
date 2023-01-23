import { configureStore } from "@reduxjs/toolkit";
import { settingAPI } from "../services/setting";
export const store = configureStore({
  reducer: {
    settingAPI: settingAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(settingAPI.middleware),
});
