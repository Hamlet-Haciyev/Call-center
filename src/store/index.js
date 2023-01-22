import { configureStore } from "@reduxjs/toolkit";
import { terminalAPI } from "../services/terminals";
export const store = configureStore({
  reducer: {
    terminalAPI: terminalAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(terminalAPI.middleware),
});
