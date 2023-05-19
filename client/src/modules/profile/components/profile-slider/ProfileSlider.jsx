import React from 'react';
import { useParams } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useSelector } from 'react-redux';

import HeadingThird from '../../../../ui/heading/heading-third/HeadingThird';
import Empty from '../../../../components/empty/Empty';
import LazyImg from '../../../../ui/img/LazyImg';

import './ProfileSlider.css';

export default function ProfileSlider() {
  const { id } = useParams();
  const myId = useSelector(state => state.myUser.entities.id);
  const entities = useSelector(state => id === myId ? state.myUser.entities : state.user.entities);
  
  return (
    <div className="profile-slider df-column o-gap w-100">
      <HeadingThird>Сертификаты</HeadingThird>
      { entities.certificates === null && <Empty/> }
      { entities.certificates !== null && 
        <Splide options={
          {
            rewind : true,
            perPage: 3,
            pagination: false,
            gap: '30px',
            breakpoints: {
              1200: { perPage: 2, gap: '1rem' },
              950: {
                perPage: 1,
                perMove: 1,
              }
            }
          }
        }>
          {
            entities.certificates.map((c, i) => (
              <SplideSlide key={i}>
                <LazyImg
                  src={c} 
                  alt="certificate"  
                  className="profile-slider_slide"
                />
              </SplideSlide>
            ))
          }
        </Splide>
      }
    </div>
  );
}
