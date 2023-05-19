import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loadCourses } from '../../store/courses/courses-actions';

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';

import './index.css';

export default function Board() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const isAuth = useSelector(state => state.auth.isAuth);
  const loading = useSelector(state => state.courses.loading);
  const [sidebarActive, setSidebarActive] = useState(false);
  
  const sidebarHandler = () => {
    setSidebarActive(!sidebarActive);
  };
  
  const closeSidebar = () => {
    if (sidebarActive && window.innerWidth <= 768) setSidebarActive(false);
  };
  
  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
      toast.error('Войдите чтобы посетить эту страницу');
    } else {
      if (loading === 'idle') {
        dispatch(loadCourses());
      }
    }
  });
  
  return (
    <>
      <Sidebar
        sidebarActive={sidebarActive}
        sidebarHandler={sidebarHandler}
      />
      <Header
        sidebarActive={sidebarActive}
        sidebarHandler={sidebarHandler}
      />
      <main className="board" onClick={() => closeSidebar()}>
        <Outlet />
      </main>
    </>
  );
}