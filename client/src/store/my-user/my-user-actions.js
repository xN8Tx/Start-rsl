import { createAsyncThunk } from '@reduxjs/toolkit';

import { decodeJWT } from '../../utils/decode-jwt';

const token = localStorage.getItem('access_token');

const loadMyUser = createAsyncThunk(
  '@@my-user/load-my-user',
  async (_, { extra: $api }) => {
    const { id } = decodeJWT(token);
    
    const res = await $api.get(`/users/${id}`);
    const data = res.data.message;
    
    return data;
  }
);

const editMyUser = createAsyncThunk(
  '@@my-user/edit-profile',
  async ({id, title}, { extra: $api }) => {
    const res = await $api.put(`/users/${id}`, title);
    const data = res.data.message;
    
    return data;
  }
);

const addCourse = createAsyncThunk(
  '@@my-user/add-course',
  async ({id, materials, courseId}, { getState, extra: $api }) => {
    const course = {id: courseId, status: materials.map(m => ({ id: m.id, status: false }))};
    const title = JSON.parse(JSON.stringify(getState().myUser.entities.courses));;
    
    title.push(course);
    
    const res = await $api.put(`users/course/${id}`, title);
    const data = res.data.message;
    return data;
  }
);

const changeCourse = createAsyncThunk(
  '@@my-user/change-course',
  async ({id, videoId, courseId}, { getState, extra: $api }) => {
    const title = JSON.parse(JSON.stringify(getState().myUser.entities.courses));
    
    const indexOfCourse = title.findIndex(el => el.id === courseId);
    const indexOfVideo = title[indexOfCourse].status.findIndex(el => el.id === Number(videoId));
    
    
    title[indexOfCourse].status[indexOfVideo].status = true;
    
    const res = await $api.put(`users/course/${id}`, title);
    const data = res.data.message;
    return data;
  }
);

const addExperience = createAsyncThunk(
  '@@my-user/add-experience',
  async ({id, xp}, { getState, extra: $api }) => {
    const title = { title: Number(JSON.parse(JSON.stringify(getState().myUser.entities.experience))) + xp};
    
    
    const res = await $api.put(`users/experience/${id}`, title);
    const data = res.data.message;
    return data;
  }
);

const uploadAvatar = createAsyncThunk(
  '@@my-user/upload-avatar',
  async ({ id, avatar}, { getState, extra: $api }) => {
    const formData = new FormData();
    formData.append('avatar', avatar);
    
    const res = await $api.post(`upload/avatar/${id}`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    const data = res.data.message;
    
    return data;
  }
);

const uploadCover = createAsyncThunk(
  '@@my-user/upload-cover',
  async ({ id, cover}, { getState, extra: $api }) => {
    const formData = new FormData();
    formData.append('cover', cover);
    
    const res = await $api.post(`upload/cover/${id}`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    const data = res.data.message;
    
    return data;
  }
);

export { loadMyUser, editMyUser, addCourse, changeCourse, addExperience, uploadAvatar, uploadCover };