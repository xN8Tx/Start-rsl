import React from 'react';

import LazyImg from '../../ui/img/LazyImg';

import bg from '../../assets/images/DevelopmentBg.png'; 

import './DevelopmentContent.css';

export default function DevelopmentContent() {
  return (
    <section className="development-content df-column df-center o-gap">
      <div className="df df-center df-wrap o-gap">
        <div className="development-content__row_bg">
          <LazyImg
            src={bg} 
            alt="Background"
            className="development-content__img"
          />
        </div>
        <div className="development-content__row_text">
          <h1>В разработке</h1>
          <p>Скоро мы все сделаем</p>
        </div>
      </div>
    </section>
  );
}
