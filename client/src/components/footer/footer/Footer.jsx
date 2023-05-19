import React from 'react';

import paths from '../../../paths';

import FooterList from '../footer-list/FooterList';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-wrapper df-column o-gap df-wrap">
        <div className="home-footer__nav df df-start df-wrap">
          {paths.map((el, i) => (
            <FooterList key={i} links={el.links} />
          ))}
        </div>
        <div className="home-footer__contact df df-c-sb i-gap df-wrap">
          <div className="home-footer__contact_link">
            <a href="https://t.me/xN8Tx" rel="noreferrer" target="_blank">Есть вопросы или предложения <span>напишите</span> нам</a>
            <p>Контактный центр</p>
          </div>
          <p>г. Новосибирск</p>
        </div>
      </div>
    </footer>
  );
}
