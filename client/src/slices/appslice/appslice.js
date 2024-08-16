import { createSlice } from "@reduxjs/toolkit";

// This Slice is used to set the name of the Application

const initialState = {
  name: "Blogify",
  logo: "",
  active_page: "",
};

const appslice = createSlice({
  name: "appslice",
  initialState,
  reducers: {
    setAppName: (state, action) => {
      state.name = action.payload.name;
      state.logo = action.payload.logo;
    },

    setActivePage: (state, action) => {
      state.active_page = action.payload;
    },
  },
});

export const { setAppName, setActivePage } = appslice.actions;
export default appslice.reducer;
