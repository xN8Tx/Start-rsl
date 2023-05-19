import React from 'react';

import MainHeading from '../../../../ui/heading/main-heading/MainHeading';
import MyCoursesList from './components/MyCoursesList';


export default function MyCourses() {
  return (
    <>
      <MainHeading>Мои курсы</MainHeading>
      <MyCoursesList />
    </>
  );
}
