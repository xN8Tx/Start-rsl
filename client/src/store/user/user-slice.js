import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loadUser = createAsyncThunk(
  '@@user/load-user',
  async (id, { extra: $api }) => {
    const res = await $api.get(`/users/${id}`);
    const data = res.data.message;
    
    return data;
  }
);

const userSlice = createSlice({
  name: '@@user',
  initialState: {
    entities: {},
    loaded: false,
    loading: 'idle',
    error: null,
  },
  reducers: {
    resetUser: (state, action) => {
      state.entities = {};
      state.loading = 'idle';
      state.error = null;
      state.loaded = false;
    } 
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.loaded = true;
        state.error = null;
        state.entities = action.payload;
        state.entities.certificates = JSON.parse(state.entities.certificates);
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = 'idle';
        state.loaded = false;
        state.error = action.error.name;
        state.entities = {};
      })
      .addCase(loadUser.pending, (state, action) => {
        state.loading = 'loading';
        state.loaded = false;
        state.error = action.payload;
        state.entities = {};
      });
  },
});

const { resetUser } = userSlice.actions;
const userReducer = userSlice.reducer;

export { loadUser, userReducer, resetUser }; 