import React from 'react';
import { NavLink } from 'react-router-dom';

import './SidebarLink.css';

export default function SidebarLink({to, children}) {
  return (
    <NavLink className="sidebar-link df df-c-s is-gap" to={to}>
      {children}
    </NavLink>
  );
}
