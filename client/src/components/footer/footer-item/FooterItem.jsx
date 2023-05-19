import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterItem({type, text, path}) {
  return (
    <li className="home-footer__nav_heading first">
      { type === 'link' 
        ? 
        <Link to={path}>{text}</Link>
        :
        <a href={path}>{text}</a>
      }
    </li>
  );
}
