import { SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { Link } from 'react-router-dom';

import LazyImg from '../../../ui/img/LazyImg';

export default function SliderItem({id, title, level, src}) {
  return (
    <SplideSlide>
      <Link to={`/board/courses/${id}`} className="home-slide df-center i-gap">
        <div className="home-slide__text df-column df-center">
          <p className="home-slide__text_big">{title}</p>
          <p className="home-slide__text_small">{level}</p>
        </div>
        <div className="home-slide__bg">
          <LazyImg 
            src={src}
            className="home-slide__bg"
          />
        </div>
      </Link>
    </SplideSlide>
  );
}
