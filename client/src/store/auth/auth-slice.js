import { createSlice } from '@reduxjs/toolkit';
import { authLogin, authLogout, authRegistration } from './auth-actions';

const isAuth = localStorage.getItem('access_token') !== null ? true : false;

const authSlice = createSlice({
  name: '@@auth',
  initialState: {
    isAuth: isAuth,
    loading: 'idle', // 'loading'
    error: null
  },
  reducers: {
    resetAuth: (state, action) => ({
      isAuth: false,
      loading: 'idle', 
      error: null
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state, action) => ({
        isAuth: true,
        loading: 'succeeded', 
        error: null
      }))
      .addCase(authLogin.pending, (state, action) => ({
        isAuth: false,
        loading: 'loading', 
        error: null
      }))
      .addCase(authLogin.rejected, (state, action) => ({
        isAuth: false,
        loading: 'idle', 
        error: action?.error?.name
      }))
      
      .addCase(authRegistration.fulfilled, (state, action) => ({
        isAuth: true,
        loading: 'idle', 
        error: null
      }))
      .addCase(authRegistration.pending, (state, action) => ({
        isAuth: false,
        loading: 'loading', 
        error: null
      }))
      .addCase(authRegistration.rejected, (state, action) => ({
        isAuth: false,
        loading: 'loading', 
        error: action?.error?.name
      }))
      
      .addCase(authLogout.fulfilled, (state, action) => ({
        isAuth: false,
        loading: 'idle', 
        error: null
      }))
      .addCase(authLogout.pending, (state, action) => ({
        isAuth: false,
        loading: 'loading', 
        error: null
      }))
      .addCase(authLogout.rejected, (state, action) => ({
        isAuth: false,
        loading: 'loading', 
        error: action?.error?.name
      }));
  }
});

const { resetAuth } = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, resetAuth };