import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './addressSlice';

export const store = configureStore({
  reducer: {
    addresses: addressReducer,
  },
});