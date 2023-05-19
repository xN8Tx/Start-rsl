import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderAccount from '../header-account/HeaderAccount';

import LogoSvg from '../../../assets/svg/LogoSvg';

import './HeaderWrapper.css';

export default function HeaderWrapper({children}) {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [profile, setProfile] = useState(false);
  
  const handlerBurger = () => {
    document.body.setAttribute('data-lock', burgerStatus);
    setBurgerStatus(!burgerStatus);
  };
  
  return (
    <header className="header" data-burger={burgerStatus}>
      <div className="header__wrapper df df-c-sb">
        <Link to="/" className="header__logo">
          <LogoSvg />
        </Link>
        <div 
          className="header__burger df-center" 
          onClick={handlerBurger}
        >
          <span className="header__burger_btn"></span>
        </div>
        <nav className="header__nav i-gap">
          {children}
          <HeaderAccount profileActive={profile} profileActiveHandler={() => setProfile(!profile)} />
        </nav>
      </div>
    </header>
  );
}
