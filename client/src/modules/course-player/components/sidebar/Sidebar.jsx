import React from 'react';

import SidebarWrapper from '../../../../components/sidebar-wrapper/SidebarWrapper';
import SidebarList from '../sidebar-list/SidebarList';

export default function Sidebar({sidebarActive}) {
  return (
    <SidebarWrapper sidebarActive={sidebarActive}>
      <div className="df-column i-gap">
        <SidebarList />
      </div>
    </SidebarWrapper>
  );
}
