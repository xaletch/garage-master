import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // FILTER CASE
  start_price: null,
  end_price: null,
};

export const filterCase = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // FILTER CASE
    setMinPrice: (state, action) => {
      state.start_price = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.end_price = action.payload;
    },
  },
})

export const { setMinPrice, setMaxPrice } = filterCase.actions;

export default filterCase.reducer;