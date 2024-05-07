import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import instance from '../axios/axios'

const initialState = {
    loading: true,
    loggedInUser: {},
    userData: {},
    isUserLoggedIn: localStorage.getItem('token') ? true : true
}

export const login = createAsyncThunk('account/login', async (data, { rejectWithValue }) => {
    try {
        return await instance.post('login', data, { withCredentials: true })

    } catch (error) {
        return rejectWithValue(error.responce)
    }
})

export const register = createAsyncThunk('account/register', async (data, { rejectWithValue }) => {
    try {
        return await instance.post('register', data, { withCredentials: true })

    } catch (error) {
        return rejectWithValue(error.responce)
    }
})




const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Login Users
            .addCase(login.pending, (state,) => {
                state.loading = true
                state.isUserLoggedIn = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.isUserLoggedIn = true
                state.loggedInUser = action.payload
                toast.success(action.payload.message);
                localStorage.setItem('token', action?.payload?.token)
            })
            .addCase(login.rejected, (state,) => {
                state.loading = false
                state.isUserLoggedIn = false
            })

            // Register new users
            .addCase(register.pending, (state,) => {
                state.loading = true
                state.isUserLoggedIn = false
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false
                state.isUserLoggedIn = true
                state.loggedInUser = action.payload
                toast.success(action.payload.message);
                localStorage.setItem('token', action?.payload?.token)
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false
                state.isUserLoggedIn = false
                toast.success(action.payload);
            })
    }
})

export default authSlice.reducer