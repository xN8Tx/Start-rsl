import React from 'react';

import { roleChecker } from '../../../../../../utils/role-checker';

import LazyImg from '../../../../../../ui/img/LazyImg';
import HeadingThird from '../../../../../../ui/heading/heading-third/HeadingThird';

import './UserItemTitle.css';

export default function UserItemTitle({avatar, name, surname, role}) {
  return (
    <div className="df df-center ixs-gap">
      <LazyImg 
        src={avatar}
        alt="Аватарка"
        className="my-avatar"
      />
      <div className="df-column">
        <HeadingThird>{name} {surname}</HeadingThird>
        <p className="user-item-title__role">{roleChecker(role)}</p>
      </div>
    </div>
  );
}
