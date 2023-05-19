import React from 'react';
import { Link } from 'react-router-dom';

import { avgRating } from '../../../utils/avg-rating';

import HeadingSecond from '../../../ui/heading/heading-second/HeadingSecond';
import TextMain from '../../../ui/text/text-main/TextMain';
import LazyImg from '../../../ui/img/LazyImg';

import StarSvg from '../../../assets/svg/StarSvg';

import './CourseSmall.css';

export default function CourseSmall({id, cover, title, description, level, rating}) {
  return (
    <Link to={id} className="course-course-small df-column df-start i-gap">
      <div className="course-course-small__cover">
        <LazyImg
          src={cover}
          alt="Cover"
          className="course-course-small__cover"
        />
      </div>
      <div className="course-course-small__info df-column df-s-sb is-gap">
        <div className="df-column ixs-gap">
          <HeadingSecond>{title}</HeadingSecond>
          <TextMain>{description}</TextMain>
        </div>
        <div className="course-course-small__info_rating df df-c-sb i-gap">
          <TextMain>{level}</TextMain>
          <TextMain>
            {rating.length > 0 ? avgRating(rating) : 'Нет оценки'}
            <StarSvg />
          </TextMain>
        </div>
      </div>
    </Link>
  );
}
