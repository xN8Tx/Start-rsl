import React from 'react';

import MainHeading from '../../../../ui/heading/main-heading/MainHeading';
import UsersList from './components/users-list/UsersList';

export default function CrmUsers() {
  return (
    <>
      <MainHeading>Курсы</MainHeading>
      <UsersList />
    </>
  );
}
