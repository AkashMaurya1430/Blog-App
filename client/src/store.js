import { configureStore } from "@reduxjs/toolkit";
import authslice from "./slices/authslice/authslice";
import appslice from "./slices/appslice/appslice";

export const store = configureStore({
  reducer: {
    auth: authslice,
    appname: appslice,
  },
});
