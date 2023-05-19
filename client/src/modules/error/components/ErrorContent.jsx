import React from 'react';

import BigLink from '../../../ui/links/big-link/BigLink';
import LazyImg from '../../../ui/img/LazyImg';

import bg from '../../../assets/images/errorBg.png'; 

import './ErrorContent.css';

export default function ErrorContent() {
  return (
    <section className="error-content df-column df-center o-gap">
      <div className="error-content__row df df-center df-wrap o-gap">
        <div className="error-content__row_bg">
          <LazyImg 
            src={bg}
            alt="bg"
            className="error-content__img"
          />
        </div>
        <div className="error-content__row_text">
          <h1>ОШИБКА</h1>
          <p>Такой страницы не существует</p>
        </div>
      </div>
      <BigLink to="/">Домой</BigLink>
    </section>
  );
}
