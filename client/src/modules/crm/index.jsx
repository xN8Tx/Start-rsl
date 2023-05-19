import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { loadCourses } from '../../store/courses/courses-actions';
import { loadUsers } from '../../store/users/users-actions';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

import './index.css';

export default function Crm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [sidebarActive, setSidebarActive] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuth);
  const role = useSelector(state => state.myUser.entities.role);
  const loading = useSelector(state => state.myUser.loading);
  
  const coursesLoading = useSelector(state => state.courses.loading);
  const usersLoading = useSelector(state => state.users.loading);
  
  const closeSidebar = () => {
    if (sidebarActive && document.documentElement.clientWidth >= 768) setSidebarActive(false);
  };
  
  useEffect(() => {
    if (coursesLoading === 'idle') dispatch(loadCourses());
    if (usersLoading === 'idle') dispatch(loadUsers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  
  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
      toast.error('Войдите чтобы посетить эту страницу');
    } else {
      if (loading === 'succeeded') {
        if (role < 3) {
          navigate('/board');
          toast.error('Вы не можете посетить эту страницу');
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  
  return (
    <>
      <Header sidebarActive={sidebarActive} sidebarHandler={() => setSidebarActive(!sidebarActive)}/>
      <Sidebar sidebarActive={sidebarActive}/>
      <main className="board" onClick={() => closeSidebar()}>
        <Outlet />
      </main>
    </>
  );
}
