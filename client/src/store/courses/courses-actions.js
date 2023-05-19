import { createAsyncThunk } from '@reduxjs/toolkit';

const loadCourses = createAsyncThunk('@@courses/load-courses', async (_, { extra: $api }) => {
  const data = await $api.get('/courses');
  const res = data.data.message;

  console.log(res);

  return res;
});

const deleteCourses = createAsyncThunk('@@courses/delete-courses', async (id, { extra: $api }) => {
  const data = await $api.delete(`/courses/${id}`);
  const res = data.data.message;

  return res;
});

const addCourse = createAsyncThunk('@@courses/add-course', async ({ title }, { extra: $api }) => {
  const res = await $api.post('/courses/', title);
  const data = await res.data.message;

  return data;
});

export { loadCourses, deleteCourses, addCourse };
