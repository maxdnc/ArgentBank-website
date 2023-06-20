import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
