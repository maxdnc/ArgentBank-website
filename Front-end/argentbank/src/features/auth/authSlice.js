import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: '',
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = '';
    },
  },
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;

export default authSlice.reducer;
// Selectors
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
