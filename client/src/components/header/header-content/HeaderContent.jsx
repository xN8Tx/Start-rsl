import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderContent.css';

export default function HeaderContent() {
  return (
    <ul className="header__list df df-center i-gap">
      <li className="header__list_item">
        <Link to="/board/" className="header__list_link">Дэшбоард</Link>
      </li>
      <li className="header__list_item">
        <Link to="/board/my-courses" className="header__list_link">Мои курсы</Link>
      </li>
      <li className="header__list_item">
        <Link to="/board/my-certificates" className="header__list_link">Мои сертификаты</Link>
      </li>
      <li className="header__list_item">
        <Link to="/board/courses" className="header__list_link">Курсы</Link>
      </li>
    </ul>
  );
}
