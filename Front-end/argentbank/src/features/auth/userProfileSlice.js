import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserProfile, updateUserName } = userProfileSlice.actions;

export default userProfileSlice.reducer;

// Selectors
export const selectUserProfile = (state) => state.userProfile;
export const selectUserName = (state) => state.userProfile.userName;
