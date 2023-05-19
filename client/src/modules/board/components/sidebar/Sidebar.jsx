import React from 'react';

import SidebarWrapper from '../../../../components/sidebar-wrapper/SidebarWrapper';
import CustomLink from '../../../../ui/links/custom-link/CustomLink';
import SidebarLink from '../../../../ui/links/sidebar-link/SidebarLink';

import DashboardSvg from '../../../../assets/svg/DashboardSvg';
import MyCoursesSvg from '../../../../assets/svg/MyCoursesSvg';
import MyCertificates from '../../../../assets/svg/MyCertificatesSvg';
import CoursesSvg from '../../../../assets/svg/CoursesSvg';
import ForumSvg from '../../../../assets/svg/ForumSvg';

import './Sidebar.css';

export default function Sidebar({sidebarActive}) {
  return ( 
    <SidebarWrapper sidebarActive={sidebarActive}>
      <div className="df-column i-gap">
        <div className="df-column is-gap">
          <CustomLink to="/board">
            <DashboardSvg />
            Дэшбоард
          </CustomLink>
          <SidebarLink to="my-courses">
            <MyCoursesSvg />
            Мои курсы
          </SidebarLink>
          <SidebarLink to="my-certificates">
            <MyCertificates />
            Мои сертификаты
          </SidebarLink>
        </div>
        <div className="df-column is-gap">
          <h4 className="board-sidebar__list_title">Обучение</h4>
          <SidebarLink to="courses">
            <CoursesSvg />
            Курсы
          </SidebarLink>
        </div>
        <div className="df-column is-gap">
          <h4 className="board-sidebar__list_title">Комьюнити</h4>
          <SidebarLink to="forum">
            <ForumSvg />
            Форум
          </SidebarLink>
        </div>
      </div>
    </SidebarWrapper>
  );
}
