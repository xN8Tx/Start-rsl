import React from 'react';
import { useSelector } from 'react-redux';

import { selectByActive } from '../../../../../store/courses/courses-selectors';
import { statusCounter } from '../../../../../utils/status-counter';

import MyCourse from '../../../components/my-course/MyCourse';
import Error from '../../../../../components/error/Error';
import HeadingFourth from '../../../../../ui/heading/heading-fourth/HeadingFourth';
import Loading from '../../../../../components/loading/Loading';

import './MyCoursesList.css';

export default function MyCoursesList() {
  const coursesStatus = useSelector(state => state.myUser.entities.courses);
  
  const { loading: myUserLoading, error: myUserError } = useSelector(state => state.myUser);
  const { loading: coursesLoading, error: coursesError } = useSelector(state => state.courses); 
  
  const error = myUserError || coursesError;
  const loading = coursesLoading === 'loading' ||  myUserLoading === 'loading';
  const loaded = coursesLoading === 'succeeded' &&  myUserLoading === 'succeeded';
  
  const courses = useSelector(state => selectByActive(state));

  return (
    <>
      { loading && <Loading/> }
      { error && <Error/> }
      { loaded && !error && 
        <>
          {coursesStatus.length !== 0
            ?
            <div className="w-100 df df-wrap df-s-cb i-gap">
              {courses.map(course => {
                const indexOfCourse = coursesStatus.findIndex(el => el.id === course.id);
                
                if (statusCounter(coursesStatus[indexOfCourse].status) === 100) return null;
                
                return (
                  <MyCourse
                    key={course.id}
                    id={course.id}
                    cover={course.cover}
                    name={course.name}
                    level={course.level}
                    status={`${statusCounter(coursesStatus[indexOfCourse].status)}%`}
                  />
                );
              })}
            </div>
            :
            <div className="wh-100 df df-center">
              <HeadingFourth>Нет активных курсов</HeadingFourth>
            </div>}
        </>
      }    
    
    </>
  );
}
