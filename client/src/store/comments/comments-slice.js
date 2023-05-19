import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addComments,
  addDislike,
  addLike,
  deleteComments,
  deleteDislike,
  deleteLike,
  loadComments,
} from './commetns-actions';

const commentsSlice = createSlice({
  name: '@@comments',
  initialState: {
    entities: [],
    loading: 'idle',
    error: null,
  },
  reducers: {
    resetComments: (state) => {
      state.loading = 'idle';
      state.error = null;
      state.entities = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadComments.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities.push(...action.payload);
        state.entities = state.entities.map((el) => ({
          id: el.id,
          userId: el.user_id,
          name: el.name,
          surname: el.surname,
          avatar: el.avatar,
          course_id: el.course_id,
          body: el.body,
          date: el.date,
          likes: JSON.parse(el.likes),
          dislikes: JSON.parse(el.dislikes),
        }));
      })
      .addCase(deleteComments.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities = state.entities.filter((e) => e.id !== action.payload.id);
      })
      .addCase(addComments.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.error = null;
        state.entities.push({
          id: action.payload.id,
          name: action.payload.name,
          surname: action.payload.surname,
          avatar: action.payload.avatar,
          course_id: action.payload.course_id,
          body: action.payload.body,
          date: action.payload.date,
          likes: JSON.parse(action.payload.likes),
          dislikes: JSON.parse(action.payload.dislikes),
        });
      })

      .addMatcher(isAnyOf(addLike.fulfilled, deleteLike.fulfilled), (state, action) => {
        const index = state.entities.findIndex((el) => el.id === action.payload.id);
        state.loading = 'succeeded';
        state.error = null;
        state.entities[index].likes = JSON.parse(action.payload.data);
      })
      .addMatcher(isAnyOf(addDislike.fulfilled, deleteDislike.fulfilled), (state, action) => {
        const index = state.entities.findIndex((el) => el.id === action.payload.id);
        state.loading = 'succeeded';
        state.error = null;
        state.entities[index].dislikes = JSON.parse(action.payload.data);
      })
      .addMatcher(isAnyOf(loadComments.pending), (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          loadComments.rejected,
          deleteComments.rejected,
          addComments.rejected,
          addLike.rejected,
          deleteLike.rejected,
          addDislike.rejected,
          deleteDislike.rejected,
        ),
        (state, action) => {
          state.loading = 'idle';
          state.error = action?.error?.name;
        },
      );
  },
});

const commentsReducer = commentsSlice.reducer;
const { resetComments } = commentsSlice.actions;

export { commentsReducer, resetComments, loadComments, addComments, deleteComments };
