import React from 'react';

import PartHeaderWrapper from '../../../../components/header/part-header-wrapper/PartHeaderWrapper';
import ButtonLink from '../../../../ui/links/button-link/ButtonLink';

export default function Header({sidebarActive, sidebarHandler}) {
  return (
    <PartHeaderWrapper sidebarActive={sidebarActive} sidebarHandler={sidebarHandler}>
      <ButtonLink to="/crm/courses/add">Добавить курс</ButtonLink>
    </PartHeaderWrapper>
  );
}
