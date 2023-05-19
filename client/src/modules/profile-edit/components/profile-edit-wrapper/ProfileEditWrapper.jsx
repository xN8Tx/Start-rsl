import React from 'react';
import { useNavigate } from 'react-router-dom';

import TextSmall from '../../../../ui/text/text-small/TextSmall';
import MainHeading from '../../../../ui/heading/main-heading/MainHeading';
import EditProfileForm from '../edit-profile-form/EditProfileForm';

import './ProfileEditWrapper.css';

function ProfileEditWrapper(props) {
  const navigate = useNavigate();
  
  return (
    <div className="edit-profile__wrapper df-column df-start">
      <div className="df-column is-gap">
        <TextSmall
          onClick={() => navigate(-1)}
        >Назад</TextSmall>
        <MainHeading>Редактировать аккаунт</MainHeading>
      </div>
      <EditProfileForm/>
    </div>
  );
}

export default ProfileEditWrapper;