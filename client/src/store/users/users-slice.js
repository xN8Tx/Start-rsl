import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { loadUsers, deleteUsers, updateUsers } from './users-actions';

const usersSlice = createSlice({
  name: '@@users',
  initialState: {
    loading: 'idle',
    error: null,
    entities: [],
  },
  reducers: {
    resetUsers: (state) => {
      state.loading = 'idle';
      state.error = null;
      state.entities = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = action.payload;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = state.entities.filter((e) => e.id !== action.payload.id);
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = state.entities.map((e) => (e.id === action.payload.id ? action.payload : e));
      })

      .addMatcher(isAnyOf(loadUsers.pending, updateUsers.pending, deleteUsers.pending), (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addMatcher(isAnyOf(loadUsers.rejected, updateUsers.rejected, deleteUsers.rejected), (state, action) => {
        state.loading = 'idle';
        state.error = action?.error?.name;
      });
  },
});

const { resetUsers } = usersSlice.actions;
const usersReduces = usersSlice.reducer;

export { resetUsers, usersReduces };
