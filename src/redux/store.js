import { configureStore } from '@reduxjs/toolkit'

import casesSlice from './slices/casesSlice';
import registration from './slices/registration';
import auth from './slices/auth';
import user from './slices/user';

export const store = configureStore({
  reducer: {
    cases: casesSlice,
    registration,
    auth,
    user,
  },
})