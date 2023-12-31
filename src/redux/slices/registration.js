import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '../../http/axios';

export const fetchRegister = createAsyncThunk('register/fetchRegister', async(params) => {
  const { data } = await api.post('/api/v1/account/signup', params);
  return data;
});

export const fetchConfirmation = createAsyncThunk('register/fetchConfirmation', async(params) => {
  const { data } = await api.post('/api/v1/account/signup-confirm', params);
  return data;
});

const initialState = {
  data: null,
  confirmation: null,
  status: 'loading',
};

export const registration = createSlice({
  name: 'registration',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state, action) => {
      state.data = null;
      state.status = 'loading';
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.data = null;
      state.status = 'error';
    });

    builder.addCase(fetchConfirmation.pending, (state, action) => {
      state.confirmation = null;
      state.status = 'loading';
    });
    builder.addCase(fetchConfirmation.fulfilled, (state, action) => {
      state.confirmation = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchConfirmation.rejected, (state, action) => {
      state.confirmation = null;
      state.status = 'error';
    });
  }
}) 

export default registration.reducer;