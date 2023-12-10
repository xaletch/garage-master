import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '../../http/axios';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async(params) => {
  const { data } = await api.post('/api/v1/account/signin', params);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state, action) => {
      state.data = null;
      state.status = 'loading';
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchAuth.rejected, (state, action) => {
      state.data = null;
      state.status = 'error';
    });
  }
})

export const selectIsAuth = state => Boolean(state.auth.data);

export default auth.reducer;