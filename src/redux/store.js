import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import filterCase from './slices/filterCase';
import categorySlice from './slices/categoriesSlice'
import { casesApi } from './cases/cases';

export const store = configureStore({
  reducer: {
    filterCase,
    categorySlice,
    [casesApi.reducerPath]: casesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(casesApi.middleware),
})

setupListeners(store.dispatch)