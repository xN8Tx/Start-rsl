import React, { useState } from 'react';
import CoursesFilters from '../courses-filters/CoursesFilters';
import CoursesList from '../course-list/CoursesList';

export default function CoursesWrapper() {
  const [typeShow, setTypeShow] = useState(false);
  
  return (
    <div className="df-column df-start i-gap">
      <CoursesFilters 
        typeShow={window.innerWidth < 570 ? true : typeShow}
        setTypeShow={window.innerWidth < 570 ? () => {} : setTypeShow}
      />
      <CoursesList 
        typeShow={window.innerWidth < 570 ? true : typeShow}
      />
    </div>
  );
}
