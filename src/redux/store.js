import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice';
import userSlice from './slice/userSlice';
import sessionSlice from './slice/sessionSlice';
import productSlice from './slice/product/product.slice';
import addToCartSlice from './slice/product/product.slice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    session: sessionSlice,
    user: userSlice,
    product: productSlice,
    addToCart: addToCartSlice
  }
});