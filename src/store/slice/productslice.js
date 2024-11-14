// menuSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Baseurl } from '../../../BaseUrl';

export const fetchProductData = createAsyncThunk('menu/fetchMenuData', async () => {
  try {
    const response = await axios.get(`${Baseurl}/get-products`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const productslice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productslice.reducer;
