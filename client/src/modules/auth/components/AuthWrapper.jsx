import React from 'react';

import './AuthWrapper.css';

export default function AuthWrapper({children}) {
  return (
    <div className="auth-wrapper">
      {children}
    </div>
  );
}
