import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { roleChecker } from '../../../../utils/role-checker';
import { dateTransform } from '../../../../utils/date-transform';

import CalendarSvg from '../../../../assets/svg/CalendarSvg';
import ProfileLinkSvg from '../../../../assets/svg/ProfileLinkSvg';

import './ProfileName.css';

export default function ProfileName() {
  const { id } = useParams();
  const myId = useSelector(state => state.myUser.entities?.id); 
  
  const { role, date, experience, name, surname } = useSelector((state) => {
    if (id === myId) return state.myUser.entities;
    return state.user.entities;
  });
  
  return (
    <div className="profile-title__info w-100 df i-gap">
      <div className="profile-title__title df-column is-gap">
        <h2 className="profile-title__title_name">{name} {surname}</h2>
        <div className="profile-title__title_info df-column ixs-gap">
          <p>{roleChecker(role)}</p>
          <ul className="df df-center ixs-gap">
            <li>
              <CalendarSvg />
              {dateTransform(date)}
            </li>
            <li>
              <span>XP</span>
              {experience}
            </li>
          </ul>
        </div>
      </div>
      <div className="df df-c-s is-gap">
        { 
          id === myId 
            ? 
            <Link to="/edit" className="profile-title__buttons_change">Изменить</Link>
            :
            <></>
        }
        <button className="profile-title__buttons_link">
          <ProfileLinkSvg />
        </button>
      </div>
    </div>
  );
}
