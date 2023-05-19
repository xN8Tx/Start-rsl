import React from 'react';

import UserItemTitle from '../users-item-title/UserItemTitle';
import UserItemControllers from '../users-item-controllers/UserItemControllers';

import './UsersItem.css';

export default function UsersItem({id, avatar, name, surname, role}) {
  return (
    <div className="users-item w-50 df df-c-sb">
      <UserItemTitle id={id} avatar={avatar} name={name} surname={surname} role={role} />
      <UserItemControllers id={id} role={role}/>
    </div>
  );
}