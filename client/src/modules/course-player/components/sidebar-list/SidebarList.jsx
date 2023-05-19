import React from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import SidebarItem from '../sidebar-item/SidebarItem';

export default function SidebarList() {
  const { id } = useParams();

  const entities = useSelector(state => state.course.entities);
  const coursesStatus = useSelector(state => state.myUser.entities.courses);
  
  const index = coursesStatus.findIndex(el => el.id === id);  
  
  return (
    <div className="df-column is-gap">
      {index !== -1 && entities.material.map(link => {
        const indexOfVideo = coursesStatus[index].status.findIndex(el => el.id === link.id);
        return (
          <SidebarItem 
            id={entities.id}
            key={link.id}
            to={link.id}
            title={link.name}
            status={coursesStatus[index].status[indexOfVideo].status}
          />
        );
      })}
    </div>
  );
}
