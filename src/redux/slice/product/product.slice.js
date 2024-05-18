import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../../axios/axios';

const initialState = {
    loading: false,
    productsList: {},
    productData: {}
}

export const productList = createAsyncThunk("products", async (params, { rejectWithValue }) => {
    try {
        return await instance.get(`/products`);
    } catch (error) {
        return rejectWithValue(error.responce);
    }
}
);


export const productById = createAsyncThunk("products/:id",
    async (id, { rejectWithValue }) => {
        try {
            return await instance.get(`products/${id}`);
        } catch (error) {
            return rejectWithValue(error.responce);
        }
    }
);


const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productList.pending, (state) => {
                state.loading = false;
                state.productsList = {};
            })
            .addCase(productList.fulfilled, (state, action) => {
                state.loading = false;
                state.productsList = action.payload;
            })
            .addCase(productList.rejected, (state) => {
                state.loading = false;
                state.productsList = {};
            })

            // Handle productById actions
            .addCase(productById.pending, (state) => {
                state.loading = false;
                state.productData = {};
            })
            .addCase(productById.fulfilled, (state, action) => {
                state.loading = false;
                state.productData = action.payload;
            })
            .addCase(productById.rejected, (state) => {
                state.loading = false;
                state.productData = {};
            });
    },
});

export default productSlice.reducer;
