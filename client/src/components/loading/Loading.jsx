import React from 'react';

import LoadingSvg from '../../assets/svg/LoadingSvg';

import './Loading.css';

export default function Loading() {
  return (
    <div className="wh-100 df df-center">
      <LoadingSvg className="loading-wrapper__progress"/>
    </div>
  );
}
