import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authLogin, authLogout, authRegistration } from './auth-actions';

const isAuth = localStorage.getItem('access_token') !== null;

const authSlice = createSlice({
  name: '@@auth',
  initialState: {
    isAuth,
    loading: 'idle', // 'loading'
    error: null,
  },
  reducers: {
    resetAuth: () => ({
      isAuth: false,
      loading: 'idle',
      error: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state) => {
        state.isAuth = true;
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(authRegistration.fulfilled, (state) => {
        state.isAuth = true;
        state.loading = 'idle';
        state.error = null;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.isAuth = false;
        state.loading = 'idle';
        state.error = null;
      })
      .addMatcher(isAnyOf(authLogin.pending, authRegistration.pending, authLogout.pending), (state) => {
        state.loading = 'loading';
      })
      .addMatcher(isAnyOf(authLogin.rejected, authRegistration.rejected, authLogout.rejected), (state, action) => {
        state.loading = 'idle';
        state.error = action?.payload?.error;
      });
  },
});

const { resetAuth } = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, resetAuth };
