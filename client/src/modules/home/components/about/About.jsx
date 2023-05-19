import React from 'react';

import SmallTitle from '../../ui/title/small-title/SmallTitle';
import BigTitle from '../../ui/title/big-title/BigTitle';
import BigText from '../../ui/text/big-text/BigText';
import ButtonLink from '../../../../ui/links/button-link/ButtonLink';
import LazyImg from '../../../../ui/img/LazyImg';

import aboutImg from '../../../../assets/images/about.png'; 

import './About.css';

export default function About() {
  return (
    <section className="home-about" id="about">
      <div className="home-wrapper df df-c-sa df-wrap i-gap">
        <div className="home-about__text">
          <SmallTitle>О нас</SmallTitle>
          <BigTitle>Что такое StartRSL?</BigTitle>
          <BigText id="home-about__text">StartRSL - это онлайн-школа где, вы выучите русский язык жестов, чтобы с полной уверенностью присоединиться к любому разговору на языке жестов. В отличие от большинства русских курсов языка жестов, мы не просто изучаем кучу случайных, скучных маленьких знаков – мы сразу же заставляем вас общаться.</BigText>
          <ButtonLink to="/board/courses">Курсы</ButtonLink>
        </div>
        <div className="home-about__image">
          <LazyImg 
            src={aboutImg} 
            alt="Фото"
          />
        </div>
      </div>
    </section>
  );
}
