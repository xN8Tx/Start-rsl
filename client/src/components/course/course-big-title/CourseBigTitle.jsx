import React from 'react';

import { avgRating } from '../../../utils/avg-rating';

import HeadingSecond from '../../../ui/heading/heading-second/HeadingSecond';
import TextMain from '../../../ui/text/text-main/TextMain';
import LazyImg from '../../../ui/img/LazyImg';

import StarSvg from '../../../assets/svg/StarSvg';

import './CourseBigTitle.css';

export default function CourseBigTitle({id, cover, title, description, level, rating}) {
  return (
    <div className="course-course-big__wrapper wh-100 df is-gap">
      <div className="course-course-big__cover">
        <LazyImg 
          src={cover} 
          alt="Обложка"
          className="course-course__cover"
        />
      </div>
      <div className="course-course-big__info df-column">
        <div className="course-course-big__info_title df-column ixs-gap">
          <HeadingSecond>{title}</HeadingSecond>
          <TextMain>{description}</TextMain>
        </div>
        <div className="df df-c-s i-gap">
          <TextMain>{level}</TextMain>
          <TextMain>
            {rating.length > 0 ? avgRating(rating) : 'Нет оценки' }
            <StarSvg />
          </TextMain>
        </div>
      </div>
    </div>
  );
}
