import api from "@/lib/api";
import  type { AuthState } from "@/utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await api.post(`/auth/login`, userData)

            if (response.data.access_token) {
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
            }
            return response.data
        } catch (error: unknown) {
            let errorMessage = 'Login failed';
            if (typeof error === 'object' && error !== null && 'response' in error) {
                const err = error as { response?: { data?: { message?: string } } };
                errorMessage = err.response?.data?.message || errorMessage;
            }
            return rejectWithValue(
                typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage),
            );
        }
    },
)

export const signUpUser = createAsyncThunk(
    'auth/signUpUser',
    async (
        userData: { fullName: string; email: string; phoneNumber: string; password: string; },
        { rejectWithValue },
    ) => {
        console.log('Signup response:', userData)
        try {
            const response = await api.post(`/auth/register`, userData)
            return response.data
        } catch (error: unknown) {
            let errorMessage = 'Signup failed';
            if (typeof error === 'object' && error !== null && 'response' in error) {
                const err = error as { response?: { data?: { message?: string } } };
                errorMessage = err.response?.data?.message || errorMessage;
            }
            return rejectWithValue(
                typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage),
            );
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        clearError: (state) => {
            state.error = null;
        },
        loadUserFromStorage: state => {
            const token = localStorage.getItem('token')
            const user = localStorage.getItem('user')
            if (token && user) {
                state.token = token
                state.user = JSON.parse(user)
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.access_token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state,action) => {
               state.loading = false;
               state.user = action.payload.user
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export const { clearError, logout, loadUserFromStorage } = authSlice.actions
export default authSlice.reducer