import React from 'react';

import MyCourseItem from '../my-course-item/MyCourseItem';

import './MyCourseList.css';

export default function MyCourseList({id, links, active}) {
  return (
    <div className="board-myCourse__content df-column df-start" data-active={active}>
      {links.map(link => (
        <MyCourseItem key={link.id} id={id} name={link.name} type={link.type} to={link.id}/>
      ))}
    </div>
  );
}

