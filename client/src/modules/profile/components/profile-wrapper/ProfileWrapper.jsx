import React from 'react';

import ProfileCover from '../profile-cover/ProfileCover';
import ProfileContent from '../profile-content/ProfileContent';

import './ProfileWrapper.css';

export default function ProfileWrapper() {
  return (
    <main className="profile-profile">
      <ProfileCover />
      <ProfileContent />
    </main>
  );
}
