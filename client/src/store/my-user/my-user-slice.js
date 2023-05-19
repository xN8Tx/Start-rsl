import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { loadMyUser, editMyUser, addCourse, changeCourse, addExperience, uploadAvatar, uploadCover } from './my-user-actions';

const myUserSlice = createSlice({
  name: '@@my-user',
  initialState: {
    entities: {},
    loaded: false,
    loading: 'idle',
    error: null,
  },
  reducers: {
    resetMyUser: (state, action) => {
      state.entities = {};
      state.loaded = false;
      state.loading = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMyUser.fulfilled, (state, action) => {
        state.loaded = true;
        state.loading = 'succeeded';
        state.error = null;
        state.entities = action.payload;
        state.entities.certificates = JSON.parse(state.entities.certificates);
        state.entities.courses = state.entities.courses === null ? [] : JSON.parse(state.entities.courses);
      })
      .addCase(editMyUser.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.entities.certificates = JSON.parse(state.entities.certificates);
        state.entities.courses = state.entities.courses === null ? [] : JSON.parse(state.entities.courses);
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.entities.courses = state.entities.courses === null ? [] : JSON.parse(action.payload);
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(changeCourse.fulfilled, (state, action) => {
        state.entities.courses = state.entities.courses === null ? [] : JSON.parse(action.payload);
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(addExperience.fulfilled, (state, action) => {
        state.entities.experience = action.payload;
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.entities.avatar = action.payload;
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(uploadCover.fulfilled, (state, action) => {
        state.entities.cover = action.payload;
        state.loading = 'succeeded';
        state.error = null;
      })
      
      .addMatcher(isAnyOf(changeCourse.pending, uploadCover.pending, uploadAvatar.pending, addCourse.pending, editMyUser.pending, loadMyUser.pending, addExperience.pending), (state, action) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addMatcher(isAnyOf(changeCourse.rejected, uploadCover.rejected, uploadAvatar.rejected, addCourse.rejected, editMyUser.rejected, loadMyUser.rejected, addExperience.rejected), (state, action) => {
        state.loading = 'ide';
        state.error = 'error';
      });
  },
});

const { resetMyUser } = myUserSlice.actions;
const myUserReducer = myUserSlice.reducer;

export { addCourse, myUserReducer, resetMyUser }; 