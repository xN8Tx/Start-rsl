import React from 'react';

import SmallTitle from '../../ui/title/small-title/SmallTitle';
import BigTitle from '../../ui/title/big-title/BigTitle';

import EducationList from '../education-list/EducationList';

import './Education.css';

export default function Education() {
  return (
    <section className="home-education" id="education">
      <div className="home-wrapper df-column df-center o-gap">
        <div className="home-education__title">
          <SmallTitle>Обучение</SmallTitle>
          <BigTitle>Как будет проходить ваше обучение</BigTitle>
        </div>
        <EducationList />
      </div>
    </section>
  );
}
