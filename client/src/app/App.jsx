import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ErrorPage from '../modules/error';
import HomePage from '../modules/home';
import Dashboard from '../modules/board/pages/dashboard/Dashboard';
import Login from '../modules/auth/pages/Login';
import Registration from '../modules/auth/pages/Registration';
import MyCertificates from '../modules/board/pages/my-certificates/MyCertificates';
import Forum from '../modules/board/pages/forum/Forum';
import MyCourses from '../modules/board/pages/my-courses/MyCourses';
import Courses from '../modules/board/pages/courses/Courses';
import Course from '../modules/board/pages/course/Course';
import CoursePlayer from '../modules/course-player/index';
import Profile from '../modules/profile/index';
import Board from '../modules/board';
import Auth from '../modules/auth';
import ProfileRedirect from '../modules/profile/components/redirect/ProfileRedirect';
import EditProfile from '../modules/profile-edit';
import Crm from '../modules/crm';
import CrmStatistic from '../modules/crm/pages/statistic/Statistic';
import CrmCourses from '../modules/crm/pages/courses/Courses';
import CrmUsers from '../modules/crm/pages/users/Users';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import EditCourse from '../modules/crm/pages/edit-course/EditCourse';
import AddCourse from '../modules/crm/pages/add-course/AddCourse';


function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route index element={ <HomePage /> }/>
        
        <Route path="/auth/*" element={ <Auth/> }>
          <Route index element={ <Login/> }/>
          <Route path="registration" element={ <Registration /> }/>
        </Route>
        
        
        <Route path="/board/*" element={ <Board/> }>
          <Route index element={ <Dashboard />   }/>
          <Route path="my-courses" element={ <MyCourses/> } />
          <Route path="my-certificates" element={ <MyCertificates/> }/>
          <Route path="courses" element={ <Courses/> } />
          <Route path="courses/:id" element={ <Course/> }/>
          <Route path="forum" element={ <Forum/> }/>
        </Route>
        
        <Route path="/crm/*" element={ <Crm/> } >
          <Route index element={ <CrmStatistic/> }/>
          <Route path="courses" element={ <CrmCourses/> }/>
          <Route path="courses/:id" element={ <EditCourse/> }/>
          <Route path="courses/add" element={ <AddCourse/> }/>
          <Route path="users" element={ <CrmUsers/> }/>
        </Route>
        
        <Route path="/course-player/:id/:video" element={ <CoursePlayer/> }/>
        
        <Route path="profile" element={ <ProfileRedirect/> }/>
        <Route path="profile/:id" element={ <Profile/> }/>
        <Route path="edit" element={ <EditProfile/> } />

        <Route path="*" element={ <ErrorPage /> }/>
      </Routes>
    </>
  );
}

export default App;
