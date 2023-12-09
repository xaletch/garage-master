import { configureStore } from '@reduxjs/toolkit'

import casesSlice from './slices/casesSlice';

export const store = configureStore({
  reducer: {
    cases: casesSlice,
  },
})