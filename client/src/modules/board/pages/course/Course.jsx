import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadComments, resetComments } from '../../../../store/comments/comments-slice';
import { loadCourse, resetCourse } from '../../../../store/course/course-slice';

import Error from '../../../../components/error/Error';
import Loading from '../../../../components/loading/Loading';
import MainHeading from '../../../../ui/heading/main-heading/MainHeading';
import Comments from '../../../../components/comments/comments/Comments';
import CourseWrapper from './components/CourseWrapper';


import './Course.css';

export default function Course() {
  const dispatch = useDispatch();
  
  const { id } = useParams();
  const { loading: courseLoading, error: courseError } = useSelector(state => state.course);
  const { loading: commentsLoading, error: commentsError } = useSelector(state => state.comments);
  
  useEffect(() => {
    dispatch(loadCourse(id));
    dispatch(loadComments(id));
    
    return () => {
      dispatch(resetComments());
      dispatch(resetCourse());
    };
  }, [dispatch, id]);
  
  return (
    
    <>
      <MainHeading>Курс</MainHeading>
      { (courseError || commentsError) && <Error/>}
      { courseLoading === 'loading' && commentsLoading === 'loading' && <Loading/>}
      { !courseError && !commentsError && courseLoading === 'succeeded' && commentsLoading === 'succeeded' &&
        <div className="df-column df-start o-gap">
          <CourseWrapper/>
          <Comments />
        </div>
      }
    </>
  );
}
