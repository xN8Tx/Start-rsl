import React from 'react';

import MyButton from '../../ui/my-button/MyButton';
import LazyImg from '../../../../ui/img/LazyImg';

import bg from '../../../../assets/images/bg.png';

import './Concept.css';

export default function Concept() {
  return (
    <section className="home-concept df df-c-sb">
      <div className="home-concept__bg">
        <LazyImg 
          src={bg} 
          alt=""
        />
      </div>
      <div className="home-concept__text">
        <h2 className="home-concept__text_title">ВЫУЧИ ОНЛАЙН</h2>
        <h1 className="home-concept__text_heading">РУССКИЙ ЖЕСТОВЫЙ ЯЗЫК</h1>
        <p className="home-concept__text_text">Бесплатные курсы по русскому жестовому языку  которые можно учить в любом удобном месте и в любое время </p>
        <MyButton to="/auth">Войти</MyButton>
      </div>
    </section>
  );
}
