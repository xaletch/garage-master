import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '../../http/axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const { data } = await api.get('/api/v1/account/profile/get');
    return data;
});

export const fetchUserItems = createAsyncThunk('userItems/fetchUserItems', async (_, { getState }) => {
  const { start_price, end_price } = getState().user;
  const { data } = await api.get('/api/v1/user/items/list', { params: { start_price, end_price } });
  return data;
});

export const fetchTradeUrl = createAsyncThunk('user/trade_url', async (url) => {
  const { data } = await api.post('/api/v1/account/profile/set/trade_url', url);
  return data;
});

export const fetchSaleItem = createAsyncThunk('user/delete_item', async (id) => {
  const { data } = await api.get('/api/v1/user/item/sale/' + id);
  return data;
});

const initialState = {
  data: null,
  userItems: [],
  trade_url: '',
  status: 'loading',

  // FILTER CASE
  start_price: null,
  end_price: null,
};

export const user = createSlice({
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

    // DELETE ITEM
    // deleteItem: (state, action) => {
    //   state.userItems = state.userItems.filter((item) => item.id !== action.payload);
    // }
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

    // trade url
    builder.addCase(fetchTradeUrl.pending, (state, action) => {
      state.trade_url = '';
      state.status = 'loading';
    });
    builder.addCase(fetchTradeUrl.fulfilled, (state, action) => {
      state.trade_url = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchTradeUrl.rejected, (state, action) => {
      state.trade_url = '';
      state.status = 'error';
    });

    // DELETE ITEMS
    builder.addCase(fetchSaleItem.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchSaleItem.fulfilled, (state, action) => {
      state.userItems.data.items = state.userItems.data.items.filter((item) => item.id !== action.meta.arg);
      state.status = 'success';
    });
    builder.addCase(fetchSaleItem.rejected, (state, action) => {
      state.status = 'error';
    });
  }
})

export const { setMinPrice, setMaxPrice } = user.actions;

export default user.reducer;