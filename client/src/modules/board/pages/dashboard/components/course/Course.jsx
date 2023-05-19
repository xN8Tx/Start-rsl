import React from 'react';
import { useSelector } from 'react-redux';

import { selectByActive } from '../../../../../../store/courses/courses-selectors';
import { statusCounter } from '../../../../../../utils/status-counter';

import MyCourse from '../../../../components/my-course/MyCourse';
import HeadingThird from '../../../../../../ui/heading/heading-third/HeadingThird';
import HeadingFourth from '../../../../../../ui/heading/heading-fourth/HeadingFourth';
import LinkMain from '../../../../../../ui/links/link-main/LinkMain';

export default function Course() {
  const courses = useSelector(state => selectByActive(state));
  const coursesStatus = useSelector(state => state.myUser.entities.courses);
  
  const lastCourse = courses.length - 1;
  const indexOfCourse = coursesStatus.findIndex(el => el.id === courses[lastCourse].id);
  
  return (
    <section className="w-100 df-column df-start i-gap">
      <HeadingThird>Продолжить курс</HeadingThird>
      { coursesStatus.length !== 0
        ?
        <MyCourse
          id={courses[lastCourse].id}
          cover={courses[lastCourse].cover}
          name={courses[lastCourse].name}
          level={courses[lastCourse].level}
          status={`${statusCounter(coursesStatus[indexOfCourse].status)}%`}
          style={{ width: '100%' }}
        />
        :
        <HeadingFourth>Нет активных курсов</HeadingFourth>
      }
      <LinkMain to="/board/my-courses">Посмотреть все</LinkMain>
    </section>
  );
}
