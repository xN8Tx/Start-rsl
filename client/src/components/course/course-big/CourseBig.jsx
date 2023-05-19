import React from 'react';
import { Link } from 'react-router-dom';

import CourseBigTitle from '../course-big-title/CourseBigTitle';

import './CourseBig.css';

export default function CourseBig({id, cover, title, description, level, rating}) {
  return (
    <Link to={id} className="course-course-big">
      <CourseBigTitle 
        id={id}
        cover={cover}
        title={title}
        description={description}
        level={level}
        rating={rating}
      />
    </Link>
  );
}
