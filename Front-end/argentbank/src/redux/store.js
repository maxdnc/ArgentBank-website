import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import userProfileSlice from '../features/auth/userProfileSlice';
import { apiSlice } from '../features/api/apiSlice';

// persisting the store

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authSlice,
  userProfile: userProfileSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
