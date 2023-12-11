import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '../../http/axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const { data } = await api.get('/api/v1/account/profile/get');
    return data;
});

export const fetchUserItems = createAsyncThunk('userItems/fetchUserItems', async () => {
  const { data } = await api.get('/api/v1/user/items/list');
  return data;
});

const initialState = {
  data: null,
  userItems: [],
  status: 'loading',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ПОПОЛНЕНИЕ БАЛАНСА
    increaseBalance(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserItems.pending, (state, action) => {
      state.userItems = null;
      state.status = 'loading';
    });
    builder.addCase(fetchUserItems.fulfilled, (state, action) => {
      state.userItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchUserItems.rejected, (state, action) => {
      state.userItems = null;
      state.status = 'error';
    });

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

export const { increaseBalance } = user.actions;

export default user.reducer;