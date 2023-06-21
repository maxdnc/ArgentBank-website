import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: "",
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = "";
    },
  },
});

export const { setLoggedIn } = authSlice.actions;
export const { setLoggedOut } = authSlice.actions;

export default authSlice.reducer;
