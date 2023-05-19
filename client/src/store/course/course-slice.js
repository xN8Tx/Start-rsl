import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

const loadCourse = createAsyncThunk('@@course/load-course', async (id, { extra: $api }) => {
  const res = await $api.get(`/courses/${id}`);
  const data = await res.data.message;

  return data;
});

const updateCourse = createAsyncThunk('@@course/update-course', async ({ id, title }, { extra: $api }) => {
  const res = await $api.put(`/courses/${id}`, title);
  const data = await res.data.message;

  return data;
});

const updateCourseRating = createAsyncThunk('@@course/update-course-rating', async ({ id, title }, { extra: $api }) => {
  const res = await $api.put(`/courses/rating/${id}`, title);
  const data = await res.data.message;

  return data;
});

const courseSlice = createSlice({
  name: '@@course',
  initialState: {
    entities: {},
    loading: 'idle',
    error: null,
  },
  reducers: {
    resetCourse: (state) => {
      state.loading = 'idle';
      state.error = null;
      state.entities = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCourse.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = action.payload;
        state.entities.material = JSON.parse(state.entities.material);
        state.entities.rating = JSON.parse(state.entities.rating);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = action.payload;
        state.entities.material = JSON.parse(state.entities.material);
        state.entities.rating = JSON.parse(state.entities.rating);
      })
      .addCase(updateCourseRating.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = action.payload;
        state.entities.material = JSON.parse(state.entities.material);
        state.entities.rating = JSON.parse(state.entities.rating);
      })
      .addMatcher(isAnyOf(loadCourse.pending, updateCourse.pending), (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addMatcher(isAnyOf(loadCourse.rejected, updateCourse.rejected, updateCourseRating.rejected), (state, action) => {
        state.loading = 'idle';
        state.error = action?.error?.name;
      });
  },
});

const courseReducer = courseSlice.reducer;
const { resetCourse } = courseSlice.actions;

export { courseReducer, resetCourse, loadCourse, updateCourse, updateCourseRating };
