import React from 'react';
import { Link } from 'react-router-dom';

import CompletedOption from '../../../../ui/option/completed-option/CompletedOption';

import './SidebarItem.css';

export default function SidebarItem({id,to, title, status}) {
  const className = status ? 'player-sidebar__list_link df df-c-s is-gap active' : 'player-sidebar__list_link df df-c-s is-gap';
  return (
    <Link className={className} to={`/course-player/${id}/${to}`}>
      <CompletedOption 
        status={status}
        onClick={() => {}}
      />
      {title}
    </Link>
  );
}
