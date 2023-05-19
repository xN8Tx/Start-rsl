import React from 'react';
import { useSelector } from 'react-redux';

import { selectByFilters } from '../../../store/courses/courses-selectors';

import CourseBig from '../course-big/CourseBig';
import CourseSmall from '../course-small/CourseSmall';
import Loading from '../../loading/Loading';
import Error from '../../error/Error';

import './CoursesList.css';

export default function CoursesList({typeShow}) {
  const { loading, error } = useSelector(state => state.courses);
  const { level, rating } = useSelector(state => state.filters);
  
  const courses = useSelector(state => selectByFilters(state, level, rating));
  
  return (
    <>
      { loading === 'loading' && <Loading/> }
      { error && <Error/> }
      { loading === 'succeeded' && !error &&  
        <div 
          className="courses-courses__list df i-gap"
          data-show={typeShow}
        >
          {
            !typeShow
              ?
              courses.map(course => (
                <CourseBig
                  key={course.id}
                  id={course.id}
                  cover={course.cover}
                  title={course.name}
                  description={course.description}
                  level={course.level}
                  rating={course.rating}
                />
              ))
              :
              courses.map(course => (
                <CourseSmall
                  key={course.id}
                  id={course.id}
                  cover={course.cover}
                  title={course.name}
                  description={course.description}
                  level={course.level}
                  rating={course.rating}
                />
              ))
          }
        </div>
      }
    </>
  );
}
