import { configureStore } from '@reduxjs/toolkit';
import { sliderCoursesReducer } from '../modules/home/features/slider-slice';

import $api from '../api/api';

import { todoReducer } from './todo/todo-slice';
import { userReducer } from './user/user-slice';
import { authReducer } from './auth/auth-slice';
import { myUserReducer } from './my-user/my-user-slice';
import { coursesReducer } from './courses/courses-slice';
import { filterReducer } from './filters/filter-slice';
import { courseReducer } from './course/course-slice';
import { commentsReducer } from './comments/comments-slice';
import { usersReduces } from './users/users-slice';

const store = configureStore({
  reducer: {
    sliderCourses: sliderCoursesReducer,
    auth: authReducer,
    myUser: myUserReducer,
    user: userReducer,
    courses: coursesReducer,
    filters: filterReducer,
    comments: commentsReducer,
    course: courseReducer,
    todo: todoReducer,
    users: usersReduces
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: $api
    }
  })
});

export { store };