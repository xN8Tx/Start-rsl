import React from 'react';

import ProfileTitle from '../profile-title/ProfileTitle';
import ProfileSlider from '../profile-slider/ProfileSlider';

import './ProfileContent.css';

export default function ProfileContent() {
  return (
    <div className="profile-content">
      <ProfileTitle />
      <ProfileSlider />
    </div>
  );
}
