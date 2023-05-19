import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { addCourse, deleteCourses, loadCourses } from './courses-actions';

const coursesSlice = createSlice({
  name: '@@courses',
  initialState: {
    entities: [],
    loading: 'idle',
    error: null    
  },
  reducers: {},
  _extraReducers: (builder) => {
    builder
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = action.payload.map(el => ({ id: el.id, name: el.name, description: el.description, cover: el.cover, experience: el.experience, rating: JSON.parse(el.rating), level: el.level }));
      })
      .addCase(deleteCourses.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = state.entities.filter(el => el.id !== action.payload);
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities.push(action.payload);
        state.entities[state.entities.length - 1].rating = JSON.parse(action.payload.rating);
      })
      .addMatcher(isAnyOf(loadCourses.pending, deleteCourses.pending, addCourse.pending), (state, action) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addMatcher(isAnyOf(loadCourses.rejected, deleteCourses.rejected, addCourse.rejected), (state, action) => {
        state.loading = 'idle';
        state.error = action?.error?.name;
      });

  },
  get extraReducers() {
    return this._extraReducers;
  },
  set extraReducers(value) {
    this._extraReducers = value;
  },
});

const coursesReducer = coursesSlice.reducer;

export { coursesReducer };
