import React from 'react';

import SidebarWrapper from '../../../../components/sidebar-wrapper/SidebarWrapper';
import SidebarLink from '../../../../ui/links/sidebar-link/SidebarLink';
import CustomLink from '../../../../ui/links/custom-link/CustomLink';

import StatisticSvg from '../../../../assets/svg/StatisticSvg';
import CoursesSvg from '../../../../assets/svg/CoursesSvg';
import DashboardSvg from '../../../../assets/svg/DashboardSvg';


export default function Sidebar({sidebarActive}) {
  return (
    <SidebarWrapper sidebarActive={sidebarActive}>
      <div className="df-column df-start is-gap">
        <CustomLink to="/crm">
          <StatisticSvg />
          Статистика 
        </CustomLink>
        <SidebarLink to="/crm/courses">
          <CoursesSvg />
          Курсы
        </SidebarLink>
        <SidebarLink to="/crm/users">
          <DashboardSvg />
          Пользователи
        </SidebarLink>
      </div>
    </SidebarWrapper>
  );
}
