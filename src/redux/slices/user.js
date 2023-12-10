import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '../../http/axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const { data } = await api.get('/api/v1/account/profile/get');
    return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.data = null;
      state.status = 'loading';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.data = null;
      state.status = 'error';
    });
  }
})

export default user.reducer;