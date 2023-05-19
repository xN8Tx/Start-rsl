import React from 'react';

import PartHeaderWrapper from '../../../../components/header/part-header-wrapper/PartHeaderWrapper';

import './Header.css';

export default function Header({sidebarActive, sidebarHandler}) {
  return (
    <PartHeaderWrapper sidebarActive={sidebarActive} sidebarHandler={sidebarHandler} />
  );
}
