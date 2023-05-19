import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loadTodo, addTodo, statusTodo, deleteTodo } from './todo-actions';

const todoSlice = createSlice({
  name: '@@todo',
  initialState: {
    entities: [],
    loading: 'idle',
    error: null,
  },
  reducers: {
    resetTodo: (state, action) => {
      state.entities = [];
      state.loading = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodo.fulfilled, (state, action) => {
        state.entities.push(...action.payload);
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.entities.push(...action.payload);
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(statusTodo.fulfilled, (state, action) => {
        const index = state.entities.findIndex(t => t.id === action.payload.id);
        
        state.entities[index].status = !state.entities[index].status;
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.entities = state.entities.filter(t => t.id !== action.payload.id);
        state.loading = 'succeeded';
        state.error = null;
      })
      
      .addMatcher(isAnyOf(loadTodo.pending, addTodo.pending, statusTodo.pending, deleteTodo.pending), (state, action) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addMatcher(isAnyOf(loadTodo.rejected, addTodo.rejected, statusTodo.rejected, deleteTodo.rejected), (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  }
});

const { resetTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export { resetTodo, todoReducer };