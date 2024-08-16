import { configureStore } from "@reduxjs/toolkit";
import authslice from "./slices/authslice/authslice";

export const store = configureStore({
  reducer: {
    auth: authslice,
  },
});
