import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  username: null,
  access_token: null,
};

const authSlice = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("action: ", action);
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.access_token = action.payload.access_token;
    },

    logout: (state) => {
      (state.isLoggedIn = false), (state.user = null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
