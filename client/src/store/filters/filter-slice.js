import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: '@@filter',
  initialState: { 
    'level': 'null',
    'rating': 0,
    'search': '',
  },
  reducers: {
    changeLevel: (state, action) => {
      state.level = action.payload;
    },
    changeRating: (state, action) => {
      state.rating = action.payload;
    },
    changeSearch: (state, action) => {
      state.search = action.payload;
    }
  },
});

const { changeLevel, changeRating, changeSearch } = filtersSlice.actions;
const filterReducer = filtersSlice.reducer;

export { changeLevel, changeRating, changeSearch, filterReducer };