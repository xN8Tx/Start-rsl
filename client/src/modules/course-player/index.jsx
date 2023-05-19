import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadCourse, resetCourse } from '../../store/course/course-slice';
import { loadComments, resetComments } from '../../store/comments/comments-slice';
import { addCourse, loadMyUser } from '../../store/my-user/my-user-actions';

import Loading from '../../components/loading/Loading';
import ErrorContent from '../error/components/ErrorContent';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';

import './index.css';

export default function CoursePlayer() {
  const dispatch = useDispatch();
  const { id, video } = useParams();
  
  const { loading: courseLoading, error: courseError, entities } = useSelector(state => state.course);
  const { loading: commentsLoading, error: commentsError } = useSelector(state => state.comments);
  const { entities: myUser, loading: myUserLoading } = useSelector(state => state.myUser);
  
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarHandler = () => setSidebarActive(!sidebarActive);
  
  useEffect(() => {
    if ( courseLoading === 'succeeded' && myUserLoading === 'succeeded' && myUser.courses.findIndex(el => el.id === id) === -1 ) {
      dispatch(addCourse({
        id: myUser.id,
        materials: entities.material,
        courseId: id,
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, myUserLoading, courseLoading]);
  
  useEffect(() => {
    dispatch(loadCourse(id));
    dispatch(loadComments(id));
    
    if (myUserLoading === 'idle') {
      dispatch(loadMyUser());
    }
    
    return () => {
      dispatch(resetComments());
      dispatch(resetCourse());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);
  
  if ( courseLoading === 'succeeded' && entities.material.length < video ) {
    return (
      <ErrorContent/>
    );
  }
  
  return (
    <>
      { (courseError || commentsError) && <ErrorContent/>}
      { (courseLoading === 'loading' || commentsLoading === 'loading') && <Loading/>}
      { !courseError && !commentsError && courseLoading === 'succeeded' && commentsLoading === 'succeeded' && myUserLoading === 'succeeded' &&
        <>
          <Header 
            sidebarActive={sidebarActive}
            sidebarHandler={sidebarHandler}
          />
          <Sidebar 
            sidebarActive={sidebarActive}
          />
          <Content />
        </>
      }
    </>
  );
}
