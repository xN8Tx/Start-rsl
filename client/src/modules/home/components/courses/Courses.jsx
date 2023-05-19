import React from 'react';

import Slider from '../../features/Slider';
import BigTitle from '../../ui/title/big-title/BigTitle';
import SmallTitle from '../../ui/title/small-title/SmallTitle';

import '../../index.css';
import './Courses.css';

export default function Courses() {
  return (
    <section className="home-courses" id="courses">
      <div className="home-wrapper df-column df-center o-gap">
        <div className="home-courses__heading">
          <SmallTitle>Курсы</SmallTitle>
          <BigTitle>Посмотри что мы предлагаем</BigTitle>
        </div>
        <div className="home-courses__row">
          <Slider />
        </div>
      </div>
    </section>
  );
}

