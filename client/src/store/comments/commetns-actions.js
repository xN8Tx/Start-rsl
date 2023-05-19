import { createAsyncThunk } from '@reduxjs/toolkit';

const loadComments = createAsyncThunk(
  '@@comments/load-comments',
  async (id, { extra: $api }) => {
    const res = await $api.get(`/comments/${id}`);
    const data = await res.data.message;
    
    return data;
  }
);

const addComments = createAsyncThunk(
  '@@comments/add-comments',
  async (title, { extra: $api }) => {
    
    const res = await $api.post('/comments/', title);
    const data = await res.data.message;
    
    return data;
  }
);

const deleteComments = createAsyncThunk(
  '@@comments/delete-comments',
  async (id, { extra: $api }) => {
    
    await $api.delete(`/comments/${id}`);
    
    return { id };
  }
);

const addLike = createAsyncThunk(
  '@@comments/add-like',
  async ({ id, likes}, { extra: $api }) => {
    
    const res = await $api.put(`/comments/likes/${id}`, likes);
    const data = await res.data.message;
    
    return { id, data };
  }
);

const deleteLike = createAsyncThunk(
  '@@comments/delete-like',
  async ({ id, likes}, { extra: $api }) => {
    
    const res = await $api.put(`/comments/likes/${id}`, likes);
    const data = await res.data.message;
    
    return { id, data };
  }
);

const addDislike = createAsyncThunk(
  '@@comments/add-dislike',
  async ({ id, dislikes}, { extra: $api }) => {
    
    const res = await $api.put(`/comments/dislikes/${id}`, dislikes);
    const data = await res.data.message;
    
    return { id, data };
  }
);

const deleteDislike = createAsyncThunk(
  '@@comments/delete-dislike',
  async ({ id, dislikes}, { extra: $api }) => {
    
    const res = await $api.put(`/comments/dislikes/${id}`, dislikes);
    const data = await res.data.message;
    
    return { id, data };
  }
);

export { loadComments, addComments, deleteComments, addLike, deleteLike, addDislike, deleteDislike };