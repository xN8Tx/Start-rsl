import { createAsyncThunk } from '@reduxjs/toolkit';

const loadTodo = createAsyncThunk(
  '@@todo/load-todo',
  async (id, { extra: $api }) => {
    const res = await $api.get(`/todo/${id}`);
    const data = res.data.message;
    
    return data;
  }
);

const addTodo = createAsyncThunk(
  '@@todo/add-todo',
  async (title, { extra: $api }) => {
    const res = await $api.post('/todo', title);
    const data = res.data.message;
    
    return data;
  }
);

const statusTodo = createAsyncThunk(
  '@@todo/status-todo',
  async ({id, title}, { extra: $api }) => {
    const res = await $api.put(`/todo/${id}`, title);
    const data = res.data.message;
    
    return data;
  }
);

const deleteTodo = createAsyncThunk(
  '@@todo/delete-todo',
  async (id, { extra: $api }) => {
    const res = await $api.delete(`/todo/${id}`);
    const data = res.data.message;
    
    return data;
  }
);

export { loadTodo, addTodo, deleteTodo, statusTodo };