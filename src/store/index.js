import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import documentReducer from "./document";
export const store = configureStore({
  reducer: {
    document: documentReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
