import React from 'react';

import HeaderWrapper from '../../../../components/header/header-wrapper/HeaderWrapper';

import './Header.css';

export default function Header() {
  return (
    <HeaderWrapper>
      <ul className="home-header__list df df-center i-gap">
        <li className="home-header__list_item">
          <a href="#about" className="home-header__list_link">О нас</a>
        </li>
        <li className="home-header__list_item">
          <a href="#benefits" className="home-header__list_link">Преимущества</a>
        </li>
        <li className="home-header__list_item">
          <a href="#education" className="home-header__list_link">Обучение</a>
        </li>
        <li className="home-header__list_item">
          <a href="#courses" className="home-header__list_link">Курсы</a>
        </li>
      </ul>
    </HeaderWrapper>
  );
}
