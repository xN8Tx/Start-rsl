import React from 'react';

import ProfileAvatar from '../profile-avatar/ProfileAvatar';
import ProfileName from '../profile-name/ProfileName';

import './ProfileTitle.css';

export default function ProfileTitle() {  
  return (
    <div className="profile-title df-column i-gap">
      <ProfileAvatar />
      <ProfileName />
    </div>
  );
}
