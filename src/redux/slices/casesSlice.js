import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '../../http/axios';

export const fetchCases = createAsyncThunk('cases/get', async() => {
  const { data } = await api.get('/api/v1/cases/get');
  return data.data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCases.pending, (state, action) => {
      state.items = [];
      state.status = 'loading';
    });
    builder.addCase(fetchCases.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchCases.rejected, (state, action) => {
      state.items = [];
      state.status = 'error';
    });
  }
})

export const { } = casesSlice.actions;

export default casesSlice.reducer;