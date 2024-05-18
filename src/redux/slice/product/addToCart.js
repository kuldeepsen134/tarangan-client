import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../axios/axios'
import { toast } from 'react-toastify'

const initialState = {
  loading: false,
  cartListData: {},
  cartData: {}
}

export const createAddToCart = createAsyncThunk('cart/create', async (params, { rejectWithValue }) => {
  try {
    return await instance.post('addTocart', params)
  } catch (error) {
    return rejectWithValue(error.responce)
  }
})






const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      .addCase(createAddToCart.pending, (state) => {
        state.loading = true;
        state.cartData = {};
      })
      .addCase(createAddToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartData = action.payload;
        toast.success(action.payload.message);

      })
      .addCase(createAddToCart.rejected, (state) => {
        state.loading = false;
        state.cartData = {};
      })
     
  },
});

export default addToCartSlice.reducer