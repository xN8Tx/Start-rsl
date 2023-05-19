import React from 'react';

import cl from './BigTitle.module.css';

export default function BigTitle({children, ...props}) {
  return (
    <h2 className={cl.BigTitle} {...props}>
      {children}
    </h2>
  );
}
