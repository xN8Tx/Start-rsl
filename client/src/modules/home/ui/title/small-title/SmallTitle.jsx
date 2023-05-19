import React from 'react';

import cl from './SmallTitle.module.css';

export default function SmallTitle({children, ...props}) {
  return (
    <h3 className={cl.SmallTitle} {...props}>
      {children}
    </h3>
  );
}
