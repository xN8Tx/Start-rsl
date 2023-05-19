import React from 'react';
import FooterItem from '../footer-item/FooterItem';

export default function FooterList({links}) {
  return (
    <ul className="home-footer__nav_list">
      {links.map((el, i) => (
        <FooterItem
          key={i}
          type={el.type}
          path={el.path}
          text={el.text}
        />
      ))}
    </ul>
  );
}
