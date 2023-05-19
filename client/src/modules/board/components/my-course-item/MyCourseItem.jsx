import React from 'react';
import { Link } from 'react-router-dom';

import PlaySvg from '../../../../assets/svg/PlaySvg';

import './MyCourseItem.css';

export default function MyCourseItem({to, name, type, id}) {
  return (
    <div className="board-myCourse__link df df-c-sb">
      <Link to={`/course-player/${id}/${to}`} className="board-myCourse__link_left df df-center ixs-gap">
        <PlaySvg />
        <p>{name}</p>  
      </Link>
      <div className="board-myCourse__link_right">
        {type}
      </div>
    </div>
  );
}
