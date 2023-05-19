import { createAsyncThunk } from '@reduxjs/toolkit';

const loadUsers = createAsyncThunk(
  '@@users/load-users',
  async (_, { extra: $api }) => {
    const res = await $api.get('/users/');
    const data = res.data.message;
    
    return data;
  }
);

const updateUsers = createAsyncThunk(
  '@@users/update-users',
  async ({ id, title }, { extra: $api }) => {
    const res = await $api.put(`/users/crm/${id}`, title);
    const data = res.data.message;
    
    return data;
  }
);

const deleteUsers = createAsyncThunk(
  '@@users/delete-users',
  async ({ id }, { extra: $api }) => {
    await $api.delete(`/users/${id}`);

    return { id };
  }
);

export { loadUsers, updateUsers, deleteUsers };
