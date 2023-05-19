import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../../../api/api';

const loadSliderCourses = createAsyncThunk(
  '@@CoursesSlider/loadCourses',
  async () => {
    const res =  await axios(BASE_URL + '/courses/home/' + 6);
    const data = res.data.message;
    return data;
  }
); 

const sliderCoursesSlice = createSlice({
  name: '@@CoursesSlider',
  initialState: {
    entities: [],
    loading: 'idle', // 'loading'
    error: null
  },
  reducers: {
    resetSliderCourses: (state, action) => {
      return {
        entities: [],
        loading: 'idle', // 'loading'
        error: null
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSliderCourses.fulfilled, (state, action) => {
        state.entities.push(...action.payload);
        state.loading = 'succeeded';
        state.error = null;
      })
      .addCase(loadSliderCourses.pending  , (state, action) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(loadSliderCourses.rejected , (state, action) => {
        state.loading = 'idle';
        state.error = 'error';
      });
  }
});
const { resetSliderCourses } = sliderCoursesSlice.actions; 
const sliderCoursesReducer = sliderCoursesSlice.reducer;


export { sliderCoursesReducer, resetSliderCourses, loadSliderCourses };