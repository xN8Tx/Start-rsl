import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourseRating } from '../../../../store/course/course-slice';

import HeadingSecond from '../../../../ui/heading/heading-second/HeadingSecond';

import svg from '../../../../assets/svg-images/StarsSvg.svg';

import './RatingBody.css';

export default function RatingBody() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userId = useSelector(state => state.myUser.entities.id);
  const entities = useSelector(state => state.course.entities);
  
  const [rating, setRating] = useState(0);
  
  const list = [1, 2, 3, 4, 5];
  
  
  useEffect(() => {
    if (rating === 0) document.body.setAttribute('data-lock', false);
    if (rating > 0) {
      document.body.setAttribute('data-lock', true);
      
      const title = JSON.parse(JSON.stringify(entities));
      title.rating.push({userId, rating});
      title.rating = JSON.stringify(title.rating);
      
      dispatch(updateCourseRating({ id, title: title }));
    };
    
    return () => {
      document.body.setAttribute('data-lock', true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[rating]);
  
  return (
    <div className="rating-modal__body df-column df-center i-gap">
      <div className="rating-modal__body_title">
        <HeadingSecond>Оцените курс!</HeadingSecond>
      </div>
      <div className="rating-modal__body_starts df df-center is-gap">
        {list.map(rating => (
          <img key={rating} src={svg} alt="" onClick={() => setRating(rating)}/>
        ))}
      </div>
    </div>
  );
}
