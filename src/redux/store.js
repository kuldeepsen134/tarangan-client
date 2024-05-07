import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice';
import userSlice from './slice/userSlice';
import sessionSlice from './slice/sessionSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    session: sessionSlice,
    user: userSlice,
  }
});