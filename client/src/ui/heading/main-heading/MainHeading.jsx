import React from 'react';

import cl from './MainHeading.module.css';

export default function MainHeading({children}) {
  return (
    <h1 className={cl.MainHeading}>
      {children}
    </h1>
  );
}
