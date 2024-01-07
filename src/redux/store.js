import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import filterCase from './slices/filterCase';
import { casesApi } from './cases/cases';

export const store = configureStore({
  reducer: {
    filterCase,
    [casesApi.reducerPath]: casesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(casesApi.middleware),
})

setupListeners(store.dispatch)