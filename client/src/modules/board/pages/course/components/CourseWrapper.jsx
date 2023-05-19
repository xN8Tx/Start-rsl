import React from 'react';
import { useSelector } from 'react-redux';

import CourseBigTitle from '../../../../../components/course/course-big-title/CourseBigTitle';
import MyCourseList from '../../../components/my-course-list/MyCourseList';

import './CourseWrapper.css';

export default function CourseWrapper() {
  const course = useSelector(state => state.course.entities);
  
  return (
    <div className="course-course__wrapper">
      <CourseBigTitle
        id={course.id} 
        cover={course.cover}
        title={course.name}
        description={course.description}
        level={course.level}
        rating={course.rating}
      />
      <MyCourseList 
        links={course.material}
        id={course.id}
        active={true}
      />
    </div>
  );
}
