import React  from 'react';
import { Link } from 'react-router-dom';

import MyCourseHeading from '../my-course-heading/MyCourseHeading';

import './MyCourse.css';

export default function MyCourse({id, cover, name, level, status, ...props}) {
  return (
    <Link to={`/course-player/${id}/1`} className="board-myCourse df-column df-start" {...props}>
      <MyCourseHeading
        cover={cover}
        name={name}
        level={level}
        status={status}
      />
    </Link>
  );
}
