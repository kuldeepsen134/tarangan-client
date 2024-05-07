import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import instance from '../axios/axios'

const initialState = {
    loading: true,
    loggedIn: {},
    userData: {},
    loggedInResource: localStorage.getItem('authorizationToken') ? true : false
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




const sessionSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Login Users
            .addCase(login.pending, (state,) => {
                state.loading = true
                state.loggedInResource = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.loggedInResource = true
                state.loggedIn = action.payload
                toast.success(action.payload.message);
                localStorage.setItem('authorizationToken', action?.payload?.token)
            })
            .addCase(login.rejected, (state,) => {
                state.loading = false
                state.loggedInResource = false
            })

            // Register new users
            .addCase(register.pending, (state,) => {
                state.loading = true
                state.loggedInResource = false
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false
                state.loggedInResource = true
                state.loggedIn = action.payload
                toast.success(action.payload.message);
                localStorage.setItem('authorizationToken', action?.payload?.token)
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false
                state.loggedInResource = false
                toast.success(action.payload);
            })
    }
})

export default sessionSlice.reducer