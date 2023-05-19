import React from 'react';

import { Link } from 'react-router-dom';

import LogoSvg from '../../assets/svg/LogoSvg';

import './SidebarWrapper.css';

export default function SidebarWrapper({sidebarActive, children}) {
  return (
    <nav className="sidebar df-column o-gap" data-burger={sidebarActive}>
      <div className="sidebar__logo">
        <Link to="/board">
          <LogoSvg />
        </Link>
      </div>
      {children}
    </nav>
  );
}
